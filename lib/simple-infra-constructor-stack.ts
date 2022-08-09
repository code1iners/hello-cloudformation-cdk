import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

import {
  createCloudFrontDistribution,
  createOriginAccessIdentity,
} from "./resources/cloudfront";
import { createS3Bucket } from "./resources/s3";
import { RESOURCES_IDS } from "./constants";

export class SimpleInfraConstructorStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create origin access identity.
    const originAccessIdentity = createOriginAccessIdentity({ scope: this });

    // Defined s3 bucket aws resource.
    const bucket = createS3Bucket({
      scope: this,
      key: RESOURCES_IDS.S3_BUCKET_ID,
      originAccessIdentity,
    });

    // Defined cloudfront distribution aws resource.
    const distribution = createCloudFrontDistribution({
      scope: this,
      key: RESOURCES_IDS.CLOUDFRONT_DISTRIBUTION_ID,
      bucket,
      originAccessIdentity,
    });
  }
}
