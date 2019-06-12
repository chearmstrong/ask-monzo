/**
 * Request handlers.
 */
const end = require('./end');
const help = require('./help');
const launch = require('./launch');
const balance = require('./balance');
const unhandled = require('./unhandled');

/**
 * Error handlers.
 */
const errorHandler = require('./error');

module.exports = {
  errorHandlers: [errorHandler],
  requestHandlers: [
    balance,
    end,
    help,
    launch,
    unhandled
  ]
};
