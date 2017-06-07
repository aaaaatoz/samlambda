var request = require('request');
exports.handler = (event, context, callback) => {
    var request = require('request');
    request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    });
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: '
    });
};
