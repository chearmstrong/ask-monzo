const Monzo = require('monzo-js');
const moment = require('moment');
const R = require('ramda');

/**
 * @async
 * @param {String} accessToken
 * @return {Object<Function>}
 */
const getMonzo = (accessToken) => Promise.resolve(new Monzo(accessToken));

/**
 * @param {Object} acc
 * @return {Object}
 */
const normaliseAccount = R.applySpec({
  id: R.prop('id'),
  balance: R.o(R.divide(R.__, 100), R.propOr(0, 'balance')),
  accountNumber: R.prop('accountNumber'),
  sortCode: R.prop('sortCode'),
  type: R.prop('type'),
  owners: R.o(R.map(R.prop('preferred_name')), R.path(['_account', 'owners']))
});

/**
 * TODO
 *
 * @param {Object} trans
 * @return {Object}
 */
// const normaliseTransaction = R.applySpec({});

/**
 * Get accounts.
 *
 * @async
 * @param {String} accessToken
 * @return {Object} accounts
 */
const getAccounts = async (accessToken) => {
  const monzo = await getMonzo(accessToken);
  const accountsRaw = await monzo.accounts.all();
  const accounts = {};

  accountsRaw.forEach((acc) => {
    if (!acc._account.closed) {
      accounts[acc.id] = normaliseAccount(acc);
    }
  });

  return accounts;
};

/**
 * Get account (singular).
 *
 * @async
 * @param {String} accessToken
 * @param {String} accountId
 * @return {Object} account
 */
const getAccount = async (accessToken, accountId) => {
  const monzo = await getMonzo(accessToken);
  const accountRaw = await monzo.accounts.find(accountId);

  return normaliseAccount(accountRaw);
};

/**
 * Get account balance.
 *
 * @async
 * @param {String} accessToken
 * @param {String} accountId
 * @return {Number} balance
 */
const getBalance = async (accessToken, accountId) => {
  const { balance } = await getAccount(accessToken, accountId);

  return balance;
};

/**
 * Get account transactions.
 *
 * @async
 * @param {String} accessToken
 * @param {String} accountId
 * @param {Boolean} [yesterday=false]
 * @param {Number} [limit=3]
 * @return {Object} balanceDetails
 */
const getTransactions = async (accessToken, accountId, yesterday = false, limit = 3) => {
  const now = moment();
  const todayAtMidnight = now.startOf('day').toISOString();
  const yesterdayAtMidnight = now.subtract(1, 'days').startOf('day').toISOString();
  const q = { since: todayAtMidnight, limit };

  if (yesterday) {
    q.since = yesterdayAtMidnight;
    q.before = todayAtMidnight;
  }

  const monzo = await getMonzo(accessToken);
  const account = await monzo.accounts.find(accountId);
  const transactions = await account.transactions.query(q);

  return transactions; // TODO - Need to normalise (inc. divide amount by 100)
};

module.exports = {
  getAccount,
  getAccounts,
  getBalance,
  getTransactions
};
