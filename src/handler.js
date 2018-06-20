'use strict';

const AWS = require('aws-sdk');

module.exports.execute = (event, context, callback) => {
  const SNS = new AWS.SNS({
    apiVersion: '2010-03-31',
    region: process.env.REGION
  });

  SNS.publish({
    Message: event.message,
    Subject: event.subject,
    TopicArn: process.env.TOPIC_ARN
  }, function(err, data) {
    if (err) {
      console.log(err);
      context.fail();
    }
    context.succeed();
  });
}
