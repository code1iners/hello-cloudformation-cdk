# Hello CloudFormation CDK

Learning CloudFormation through build simple sample project.

## Preparations

1. Installed aws-cli.
2. Installed npm package aws-cdk globally.
3. Configured AWS account your machine by specific profile.

## How to use/deploy

- Required
  1. Install npm package dependencies => `npm install`.
  2. Enter deploy command with bash shell. => `sh deploy <your-aws-profile>`
- Optional
  - Write each `CDK_DEFAULT_ACCOUNT`, `CDK_DEFAULT_REGION` key, value `.env` into file (Recommended).

## Deploy Issues

- When deploy your stack, can happen bootstrap issue. in that case, See [here](https://docs.aws.amazon.com/ko_kr/cdk/v2/guide/bootstrapping.html)

## Caution

- Your typescript output will create in `__dist__` folder when `Building` or `Deploying` source code.
