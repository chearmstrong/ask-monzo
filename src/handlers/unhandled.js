const responseStrings = require('../resources/responseStrings');
const { UNHANDLED } = require('../constants/request-types');
const { AMAZON_FALLBACK_INTENT } = require('../constants/intent-types');

// TODO: Update for FALLBACK intent
module.exports = {
  canHandle: ({ requestEnvelope }) => (
    requestEnvelope.request.type === UNHANDLED ||
    requestEnvelope.request.intent.name === AMAZON_FALLBACK_INTENT
  ),
  handle: ({ responseBuilder }) => responseBuilder.speak(responseStrings.unhandled.main)
    .reprompt(responseStrings.unhandled.reprompt)
    .getResponse()
};
