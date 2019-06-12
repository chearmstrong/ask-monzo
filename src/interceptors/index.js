const logRequest = require('./log-request');
const logResponse = require('./log-response');

module.exports = {
  requestInterceptors: [logRequest],
  responseInterceptors: [logResponse]
};
