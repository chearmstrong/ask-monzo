const resolveCanonical = (slot) => {
  let canonical;

  try {
    canonical = slot.resolutions.resolutionsPerAuthority[0].values[0].value.name;
  } catch (err) {
    console.error(`resolveCanonical error ${err.message || err}`);
    canonical = slot.value;
  }

  return canonical;
};

const randomPhrase = (array) => {
  // The argument is an array [] of words or phrases
  let i = 0;
  i = Math.floor(Math.random() * array.length);

  return (array[i]);
};

const getStage = () => process.env.STAGE || 'dev';

const getAccessToken = () => process.env.ACCESS_TOKEN || null;

const getAccountId = () => process.env.ACCOUNT_ID || null;

module.exports = {
  getStage,
  randomPhrase,
  getAccountId,
  getAccessToken,
  resolveCanonical
};
