# nexmo-typeform-sms
Send SMS When Your Typeform Is Submitted Using Node.js, Hapi and the Nexmo Messages API - https://www.nexmo.com/blog/2018/10/30/send-sms-typeform-submitted-using-node-hapi-messages-api-dr

To run the code:

1. Read the blog post
2. `git clone git@github.com:nexmo-community/nexmo-typeform-sms.git`
3. `cd nexmo-typeform-sms`
4. `npm install`
5. At the top of `index.js` replace `NEXMO_API_KEY`, `NEXMO_API_SECRET`, `NEXMO_APPLICATION_ID` and `NEXMO_APPLICATION_PRIVATE_KEY_PATH` with your own credentials.
6. Replace `YOUR_NUMBER` with your phone number. Don't use a leading `+` or `00` when entering the phone number; do start with the country code, for example 447700900000.
7. `node index.js`
