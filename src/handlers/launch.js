const responseStrings = require('../resources/responseStrings');
const { LAUNCH_REQUEST } = require('../constants/request-types');

module.exports = {
  canHandle: ({ requestEnvelope }) => requestEnvelope.request.type === LAUNCH_REQUEST,
  handle: ({ responseBuilder }) => responseBuilder.speak(responseStrings.welcome.main)
    .reprompt(responseStrings.welcome.reprompt)
    .getResponse()
};
