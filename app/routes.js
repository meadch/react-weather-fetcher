const React = require('react'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute
      hashHistory = ReactRouter.hashHistory,
      Main = require('./components/Main'),
      WeatherPrompt = require('./components/WeatherPrompt')

module.exports = (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={WeatherPrompt}/>

        </Route>
      </Router>
    )
