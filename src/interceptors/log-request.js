module.exports = async ({ requestEnvelope, attributesManager }) => {
  const sessionAttributes = await attributesManager.getSessionAttributes();

  return console.log({ requestEnvelope, sessionAttributes });
};
