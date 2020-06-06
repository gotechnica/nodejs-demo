

module.exports.get_schedule = async event => {
  const name = event.queryStringParameters.name || "test";

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello, ' + name
      }
    ),
  };
};
