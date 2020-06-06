const db = require("simple-dynamodb");

module.exports.get_schedule = async event => {

  const result = await db.scanItems({
    TableName: 'schedule-demo'
  });

  console.log(result.Items);

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items)
  };
};
