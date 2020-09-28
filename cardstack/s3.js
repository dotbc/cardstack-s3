const AWS = require('aws-sdk')

function makeS3Client (config) {
  if (config.s3_environment && config.s3_environment === 'dev') {
    return new AWS.S3({
      accessKeyId: config.access_key_id,
      secretAccessKey: config.secret_access_key,
      endpoint: config.s3_host,
      sslEnabled: false,
      s3ForcePathStyle: true,
      signatureVersion: 'v2',
      params: { Bucket: config.bucket }
    })
  } else {
    return new AWS.S3({
      accessKeyId: config.access_key_id,
      secretAccessKey: config.secret_access_key,
      region: config.region,
      params: { Bucket: config.bucket }
    })
  }
}

module.exports = { makeS3Client }
