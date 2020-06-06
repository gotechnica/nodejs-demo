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

module.exports.get_event = async event => {
  const id = event.queryStringParameters.id || "1";

  const item = await db.getItem({
    TableName: 'schedule-demo',
    Key: { id }
  });

  console.log(item.Item);

  return {
    statusCode: 200,
    body: JSON.stringify(item.Item)
  };
};
