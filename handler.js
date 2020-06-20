const db = require("simple-dynamodb");
const AWS = require('aws-sdk');

const TABLE_NAME = 'schedule-demo';

// Function to get the schedule found in the `schedule-demo` table
module.exports.get_schedule = async event => {
  // Dynamodb scans items from 'TABLE_NAME' table and stores it as 'result'
  const result = await db.scanItems({
    TableName: TABLE_NAME
  });

  // Returns status code 200 and JSON string of 'Items' property from 'result'
  return {
    statusCode: 200,
    body: JSON.stringify(result.Items)
  };
};

// Function to get a single event from the `schedule-demo` table
module.exports.get_event = async event => {
  // 'id' set to existing parameter id or "1"
  const id = event.queryStringParameters.id || "1";

  // 'item' set to item with 'id' key from 'TABLE_NAME' table 
  const item = await db.getItem({
    TableName: TABLE_NAME,
    Key: { id }
  });

  // Returns status code 200 and JSON string of 'Item' property from 'item'
  return {
    statusCode: 200,
    body: JSON.stringify(item.Item)
  };
};

// Function to add an event to the `schedule-demo` table
module.exports.add_event = async event => {
  // 'body' set to result of converting JSON output from event.body to JS value
  const body = JSON.parse(event.body);

  // 'ddb' set to new DynamoDB object with specific API version
  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

  // 'params' set to contain 'TABLE_NAME' table and unset number of items
  const params = {
    TableName: TABLE_NAME,
    Item: {}
  };

  // dynamically add post request body params to document
  Object.keys(body).forEach(k => {
    params.Item[k] = {S: body[k]}
  });

  // Call DynamoDB to add the item to the table
  const result = await ddb.putItem(params).promise();

  // Returns status code 200 and JSON string of 'result'
  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};
