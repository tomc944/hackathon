// var analyze = require('Sentimental').analyze;
var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


//---------
// var OAuth = require("oauth").OAuth;
// oa = new OAuth(
//     "https://api.twitter.com/oauth/request_token",
//     "https://api.twitter.com/oauth/access_token",
//     "oHTWVwZlgcfVPjQ43Rf4cjiJ7",
//     "NMj0pEnjAQfAEiP8gyd3AglY8p7bAMDlgyCvNYbunGKm1ieF0U",
//     "1.0",
//     "",
//     "HMAC-SHA1"
// );
//
// var access_token = "58720028-HbiKMntFpHKHDcLw1nVamIZ3RM6tdNt2sN0dTuyME";
// var access_token_secret = "RF7nv8lryVek58tCvaBqkBdq7tH0vGjDxsyuVQmvxut15";
// var request = oa.get("https://api.twitter.com/1.1/search/tweets.json?q=%23BernieSanders&src=tyah", access_token, access_token_secret);
// request.addListener('response', function(response) {
//     response.setEncoding('utf8');
//     response.addListener('data', function(chunk) {
//         console.log(chunk);
//     });
//     response.addListener('end', function() {
//         console.log('-- END --');
//     });
// });
// request.end();

testTwitter = function(url){
  debugger
$.ajax({
   type: 'GET',
   url: url,
   beforeSend:function (xhr) {
     xhr.setRequestHeader('oauth_token', '58720028-HbiKMntFpHKHDcLw1nVamIZ3RM6tdNt2sN0dTuyME');
     xhr.setRequestHeader('oauth_token_secret', 'RF7nv8lryVek58tCvaBqkBdq7tH0vGjDxsyuVQmvxut15');
     xhr.setRequestHeader('consumer_key', 'oHTWVwZlgcfVPjQ43Rf4cjiJ7');
     xhr.setRequestHeader('consumer_secret', 'NMj0pEnjAQfAEiP8gyd3AglY8p7bAMDlgyCvNYbunGKm1ieF0U');
   },
   dataType: "jsonp",
   data: {},
   success: function (msg) {
    console.log(msg);
   }
}).done(function(data) {
   alert(data);
});
};

// 'https://api.twitter.com/1.1/search/tweets.json?q=%23BernieSanders&src=tyah'
// headers: {
//     "access_token":"58720028-HbiKMntFpHKHDcLw1nVamIZ3RM6tdNt2sN0dTuyME",
//     "access_token_secret":"RF7nv8lryVek58tCvaBqkBdq7tH0vGjDxsyuVQmvxut15"
// },
//---------

var Sentimental = React.createClass({
  render: function() {
    console.log("HIII");
    testTwitter('https://api.twitter.com/1.1/search/tweets.json?q=%23BernieSanders&src=tyah');
  }
});

window.testTwitter = testTwitter;

module.exports = Sentimental;

module.exports = testTwitter;
