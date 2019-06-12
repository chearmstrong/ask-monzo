const R = require('ramda');
const monzo = require('../managers/monzo');
const { BALANCE_INTENT } = require('../constants/intent-types');
const { INTENT_REQUEST } = require('../constants/request-types');
const { getAccessToken, getAccountId } = require('../utils');

module.exports = {
  canHandle: R.both(
    R.pathEq(['requestEnvelope', 'request', 'type'], INTENT_REQUEST),
    R.pathEq(['requestEnvelope', 'request', 'intent', 'name'], BALANCE_INTENT)
  ),
  handle: async ({ responseBuilder }) => { // eslint-disable-line space-before-function-paren
    const accessToken = getAccessToken();
    const accountId = getAccountId();
    const balance = await monzo.getBalance(accessToken, accountId);

    // This response string needs moved to respources
    return responseBuilder
      .speak(`Your current Monzo balance is <say-as interpret-as="unit">GBP{balance}</say-as>`)
      .getResponse();
  }
};
