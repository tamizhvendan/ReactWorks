var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports  = (
  <Route path="/" handler={Main} name = "app">
    <DefaultRoute handler={Home} />
  </Route>  
);