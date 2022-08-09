import type { Construct } from "constructs";
import type { Bucket } from "aws-cdk-lib/aws-s3";
import type { OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";

export interface CreateCloudFrontDistributionProps {
  scope: Construct;
  bucket: Bucket;
  originAccessIdentity: OriginAccessIdentity;
  key?: string;
  comment?: string;
}

export interface CreateOriginAccessIdentityProps {
  scope: Construct;
}
