import { RemovalPolicy } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Effect, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { CreateS3BucketProps } from "./index.d";
import { RESOURCES_IDS } from "../../constants";

/**
 * Create S3(Simple Storage Service) bucket.
 */
export const createS3Bucket = ({
  scope,
  key = RESOURCES_IDS.S3_BUCKET_ID,
  bucketName,
  originAccessIdentity,
}: CreateS3BucketProps) => {
  // Create a bucket.
  const bucket = new Bucket(scope, key ?? RESOURCES_IDS.S3_BUCKET_ID, {
    bucketName: bucketName ?? key,
    removalPolicy: RemovalPolicy.DESTROY,
    autoDeleteObjects: true,
  });

  // Has origin access identity property?
  if (originAccessIdentity) {
    // Defined and apply s3 bucket policy.
    const s3bucketPolicy = new PolicyStatement({
      sid: "PolicyWhichCloudFrontAccessibleToBucket",
      effect: Effect.ALLOW,
      principals: [originAccessIdentity.grantPrincipal],
      actions: ["s3:GetObject"],
      resources: [`${bucket.bucketArn}/*`],
    });
    // Apply policy into bucket.
    bucket.addToResourcePolicy(s3bucketPolicy);
  }

  return bucket;
};
