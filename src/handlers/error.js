const responseStrings = require('../resources/responseStrings');

module.exports = {
  canHandle: () => true,
  handle: ({ responseBuilder }, err) => {
    console.error('[error]', err);
    return responseBuilder.speak(responseStrings.error).getResponse();
  }
};
