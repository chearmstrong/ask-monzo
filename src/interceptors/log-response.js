module.exports = async ({ responseBuilder }) => {
  const response = await responseBuilder.getResponse();

  return console.log({ response });
};
