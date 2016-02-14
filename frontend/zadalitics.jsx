var React = require('react');
var ReactDOM = require('react-dom');

var Sentimental = require('./components/sentimental.jsx');
var ReactRouter = require('react-router');

var root = document.getElementById('main');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;


var App = React.createClass({
  render: function() {
    return (
      <div>
        hello world!
        <div>{this.props.children}</div>
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<App/>, document.getElementById('main'));
});
