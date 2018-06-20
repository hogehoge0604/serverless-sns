# Serverless setup AWS SNS

Setup AWS SNS by use of serverless framework

## Installation

If yet serverless framework not been installed. Please install from the following URL
https://serverless.com/framework/docs/providers/aws/guide/installation/

1. Clone `serverless-sns` from github
```bash
git clone https://github.com/hogehoge0604/serverless-sns.git
```
OR
```bash
wget https://github.com/hogehoge0604/serverless-sns/archive/master.zip -O serverless-sns.zip
unzip serverless-sns.zip
```

2. Execute npm command
```bash
cd serverless-sns
npm install
```

3. Edit file  

conf/custom.js
___
```
module.exports = () => {
  return {
    region: 'ap-northeast-1',

    sns: {
      displayname: '<DISPLAY_NAME>',
      subscription: [{
          Endpoint: '<MAIL_ADDRESS>',
          Protocol: 'email',
      }]
    }
  }
}```

| Edit place | Description |
-------------|-------------|
| <DISPLAY_NAME> | [A developer-defined string that can be used to identify this SNS topic.](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-sns-topic.html) |
| <MAIL_ADDRESS> | [The endpoint is an email address. delivery of message via SMTP](https://docs.aws.amazon.com/sns/latest/api/API_Subscribe.html) |

4. Deploy

```bash
serverless deploy
```

## Usage
```bash
serverless invoke --function notification --data '{"subject": "subject test", "message": "message test"}'
```

## License
The MIT License
