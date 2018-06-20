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
}
