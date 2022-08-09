import { Duration } from "aws-cdk-lib";
import {
  CloudFrontWebDistribution,
  PriceClass,
  CloudFrontAllowedMethods,
  CloudFrontAllowedCachedMethods,
  ViewerProtocolPolicy,
  HttpVersion,
} from "aws-cdk-lib/aws-cloudfront";
import { OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { RESOURCES_IDS } from "../../constants";
import {
  CreateCloudFrontDistributionProps,
  CreateOriginAccessIdentityProps,
} from "./index.d";

/**
 * Create cloudfront origin access identity.
 */
export const createOriginAccessIdentity = ({
  scope,
}: CreateOriginAccessIdentityProps) => {
  const oai = new OriginAccessIdentity(
    scope,
    `${RESOURCES_IDS.CLOUDFRONT_DISTRIBUTION_ID}-oai`
  );
  return oai;
};

/**
 * Create cloudfront distiribution.
 */
export const createCloudFrontDistribution = ({
  scope,
  key = RESOURCES_IDS.CLOUDFRONT_DISTRIBUTION_ID,
  bucket,
  originAccessIdentity,
}: CreateCloudFrontDistributionProps) =>
  new CloudFrontWebDistribution(scope, key, {
    originConfigs: [
      {
        s3OriginSource: {
          s3BucketSource: bucket,
          originAccessIdentity,
        },
        behaviors: [
          {
            isDefaultBehavior: true,
            allowedMethods: CloudFrontAllowedMethods.GET_HEAD,
            cachedMethods: CloudFrontAllowedCachedMethods.GET_HEAD,
            defaultTtl: Duration.seconds(5),
            minTtl: Duration.seconds(0),
            maxTtl: Duration.seconds(10),
            pathPattern: "*",
          },
        ],
      },
    ],
    priceClass: PriceClass.PRICE_CLASS_ALL,
    viewerProtocolPolicy: ViewerProtocolPolicy.ALLOW_ALL,
    httpVersion: HttpVersion.HTTP2,
    enableIpV6: true,
    comment: `Created by CDK for ${bucket.bucketName} bucket`,
    enabled: true,
  });
