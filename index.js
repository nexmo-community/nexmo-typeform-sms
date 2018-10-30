'use strict';

const Hapi = require('hapi');
const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: "NEXMO_API_KEY",
  apiSecret: "NEXMO_API_SECRET",
  applicationId: "NEXMO_APPLICATION_ID",
  privateKey: "NEXMO_APPLICATION_PRIVATE_KEY_PATH"
})

// create the hapi server and listen on port 3000
const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

// create a POST route for http://localhost:3000/
server.route({
  method: 'POST',
  path: '/',
  handler: (request, h) => {
    nexmo.channel.send(
      { "type": "sms", "number": "YOUR_NUMBER" },
      { "type": "sms", "number": "NEXMO" },
      {
        "content": {
          "type": "text",
          "text": `New submission in Typeform ${request.payload.form_response.definition.title} on ${new Date(request.payload.form_response.submitted_at).toDateString()}. You can view it at https://admin.typeform.com/form/${request.payload.form_response.form_id}/results#responses`
        }
      },
      (err, data) => { console.log(data.message_uuid); }
    );

    return h.response().code(200)
  }
});

// initialize the server using async/await
const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

// log any error and exit
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

// run the server
init();
