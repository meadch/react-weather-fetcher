const React = require('react'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute
      hashHistory = ReactRouter.hashHistory,
      Main = require('./components/Main'),
      WeatherPrompt = require('./components/WeatherPrompt'),
      Forecast = require('./components/Forecast'),
      Details = require('./components/Details')

module.exports = (
      <Router history={hashHistory}>
        <Route path='/' component={Main}>
          <IndexRoute component={WeatherPrompt}/>
          <Route path='/forecast' component={Forecast}/>
          <Route path='/details' component={Details}/>
        </Route>
      </Router>
    )
