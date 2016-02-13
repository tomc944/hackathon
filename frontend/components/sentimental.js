var analyze = require('Sentimental').analyze,
    React = require('react');

var Sentimental = React.createClass({
  fetchTweets: function(){

  },
  sentimentalize: function(hashtag, response){
    var hashtag_sentiments = {};
    hashtag_sentiments[hashtag] = [];

    response.forEach(function(tweet){
      var analysis = analyze(tweet);
      hashtag_sentiments[hashtag].push(analysis.score);
    });

    return hashtag_sentiments;
  },
  render: function(){
    return (
      <div>

      </div>
    );
  }
});

module.exports = Sentimental;
