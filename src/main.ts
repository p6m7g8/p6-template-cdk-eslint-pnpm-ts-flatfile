import type { Construct } from 'constructs'
import * as process from 'node:process'
import * as cdk from 'aws-cdk-lib'

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps = {}) {
    super(scope, id, props)
  }
}

// the AwsEnvironment
const theEnv = {
  account: process.env.CDK_DEPLOY_ACCOUNT || process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION,
}

// create the app and stack
const app = new cdk.App()
new MyStack(app, 'p6-template-cdk-eslint-pnpm-ts-flatfile', { env: theEnv })
app.synth()
