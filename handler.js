const db = require("simple-dynamodb");
const AWS = require('aws-sdk');

const TABLE_NAME = 'schedule-demo';

// Note we need to put in our AWS key everytime, if we have not put it in perm.
// Use sls deploy to generate, and then sls invoke -f <function name> to 
// Using sls deploy -f function name, when we've only edited one function lets us deploy much faster, then we need to invoke again
// To debug use sls logs -f <function name>

// Function to get the schedule found in the `schedule-demo` table
module.exports.get_schedule = async event => {
  const result = await db.scanItems({ // We scan the items (returns a JSON) and set it to the var result
    TableName: TABLE_NAME
  });

  return {
    statusCode: 200,
    body: JSON.stringify(result.Items) // We stringify the JSON object to be more readable
  };
};

// Function to get a single event from the `schedule-demo` table
module.exports.get_event = async event => {
  const id = event.queryStringParameters.id || "1";

  const item = await db.getItem({
    TableName: TABLE_NAME,
    Key: { id } // Tries to find the id that we passed in (in the event)
  });

  return {
    statusCode: 200,
    body: JSON.stringify(item.Item)
  };
};

// Function to add an event to the `schedule-demo` table
module.exports.add_event = async event => {
  const body = JSON.parse(event.body);

  const ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'}); // We use AWS sdk to get the info

  const params = {
    TableName: TABLE_NAME,
    Item: {}
  };

  // dynamically add post request body params to document
  Object.keys(body).forEach(k => {
    params.Item[k] = {S: body[k]} // Gets all the elements and puts it into the Items list with k as the col key, we can have as many elements as we want as long as we have the primary key.
  });

  // Call DynamoDB to add the item to the table
  const result = await ddb.putItem(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
};
