### Version checks
Check node version: `node -v` --> should be version 10 or greater

Check npm version: `npm -v` --> this relies on your node version

### Set your AWS credentials in your terminal:
Get your keys from the AWS console in IAM

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

