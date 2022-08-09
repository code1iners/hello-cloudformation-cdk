import { OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import type { Construct } from "constructs";

export interface CreateS3BucketProps {
  scope: Construct;
  bucketName?: string;
  originAccessIdentity?: OriginAccessIdentity;
  key?: string;
}
