const React = require('react'),
      WeatherForm = require('./WeatherForm')

const WeatherPrompt = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="col s6 offset-s3">
          <WeatherForm className='text-center'/>
        </div>
      </div>
    )
  }
});

module.exports = WeatherPrompt
