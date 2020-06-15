### Version checks
Download Node.js if you haven't already: https://nodejs.org/en/download/

Check node version: `node -v` (should be version 10 or greater)

Check npm version: `npm -v` (this relies on your node version)

### Optional: Install JSON Formatter Chrome Extension
https://chrome.google.com/webstore/detail/json-viewer/gbmdgpbipfallnflgajpaliibnhdgobh

### Set your AWS credentials in your terminal:
Get your keys from the AWS console in IAM: https://console.aws.amazon.com/console/home?nc2=h_ct&src=header-signin

AWS Account ID: `724934931454`

**NOTE: Please be very careful with these keys - treat them like your social security number. Never commit them publicly to Github or share with anyone else.** 

**For mac users:**

`export AWS_ACCESS_KEY_ID=<your-key-here>`

`export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>`

**For windows users:**

`set AWS_ACCESS_KEY_ID=<your-key-here>`

`set AWS_SECRET_ACCESS_KEY=<your-secret-key-here>`

### Install the Serverless framework
`npm i -g serverless`

### Create a new serverless service
`serverless create --template aws-nodejs --name <SERVICE_NAME>`

SERVICE_NAME should be something like `hugo-schedule`

### Deploy your serverless service
`sls deploy`

### Invoke your lambda function
`sls invoke -f hello -d`

### Initialize NPM package
`npm init -f`

### Add a new NPM package
`npm i <PACKAGE_NAME>`

### Add necessary npm packages for our tutorial
`npm i aws-sdk`

`npm i simple-dynamodb`

### Deploy a single function
`sls deploy -f <FUNCTION_NAME>`

### Tail the logs to debug
`sls tail -f <FUNCTION_NAME>`

### Deploy to a stage other than dev
`sls deploy -s <STAGE>`
