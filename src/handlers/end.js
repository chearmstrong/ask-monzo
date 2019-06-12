const responseStrings = require('../resources/responseStrings');
const { INTENT_REQUEST, SESSION_END_REQUEST } = require('../constants/request-types');
const { AMAZON_STOP_INTENT, AMAZON_CANCEL_INTENT } = require('../constants/intent-types');

module.exports = {
  canHandle: ({ requestEnvelope }) => (
    (requestEnvelope.request.type === INTENT_REQUEST &&
    (requestEnvelope.request.intent.name === AMAZON_STOP_INTENT ||
    requestEnvelope.request.intent.name === AMAZON_CANCEL_INTENT)) ||
    requestEnvelope.request.type === SESSION_END_REQUEST
  ),
  handle: ({ responseBuilder }) => responseBuilder.speak(responseStrings.empty).getResponse()
};
