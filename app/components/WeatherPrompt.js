const React = require('react'),
      WeatherForm = require('./WeatherForm')

const WeatherPrompt = React.createClass({
  render () {
    return (
      <WeatherForm className='text-center'/>
    )
  }
});

module.exports = WeatherPrompt
