const React = require('react'),
      ReactRouter = require('react-router'),
      Router = ReactRouter.Router,
      Route = ReactRouter.Route,
      IndexRoute = ReactRouter.IndexRoute
      hashHistory = ReactRouter.hashHistory,
      MainComponent = require('./components/Main')

module.exports = (
      <Router history={hashHistory}>
        <Route path='/' component={MainComponent}>
          {/*<IndexRoute component={Test}/>*/}

        </Route>
      </Router>
    )
