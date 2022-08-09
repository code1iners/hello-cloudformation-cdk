import { App } from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as SimpleInfraConstructor from "../lib/simple-infra-constructor-stack";

test("S3", () => {
  const app = new App();
  // WHEN
  const stack = new SimpleInfraConstructor.SimpleInfraConstructorStack(
    app,
    "MyTestStack"
  );
  // THEN
  const template = Template.fromStack(stack);

  //   template.templateMatches({
  //     Resource
  //   })

  //   template.hasResourceProperties('AWS::SQS::Queue', {
  //     VisibilityTimeout: 300
  //   });
});
