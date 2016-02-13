var analyze = require('Sentimental').analyze,
    React = require('react');

var Sentimental = React.createClass({
  fetchTweets: function(){

  },
  sentimentalize: function(hashtag, response){
    var analysis = response.map(function(tweet){
      return analyze(tweet);
    });

    this.frequencize(hashtag, analysis);
  },
  getScores: function(hashtag, data){
    var hashtag_sentiments = {};
    hashtag_sentiments[hashtag] = [];

    for (var datum in data){
      hashtag_sentiments[hashtag].push(datum.score);
    };
  },
  render: function(){
    return (
      <div>

      </div>
    );
  }
});

module.exports = Sentimental;
