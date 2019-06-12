const Alexa = require('ask-sdk');
const { requestHandlers, errorHandlers } = require('./handlers');
const { requestInterceptors, responseInterceptors } = require('./interceptors');

module.exports.handler = Alexa.SkillBuilders
  .standard()
  .addRequestHandlers(...requestHandlers)
  .addRequestInterceptors(...requestInterceptors)
  .addResponseInterceptors(...responseInterceptors)
  .addErrorHandlers(...errorHandlers)
  .lambda();
