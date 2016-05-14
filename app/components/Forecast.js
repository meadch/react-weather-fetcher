const React = require('react'),
      WeatherSummary = require('./WeatherSummary')

const Forecast = React.createClass({
  render () {
    const mainDetails = this.props.location.state.forecast.city
    let forecastData = this.props.location.state.forecast
    forecastData.list = forecastData.list.map( (forecast, idx)=>{
      return <WeatherSummary key={idx} forecast={forecast} location={mainDetails.name}/>
    })
    return (
      <div className='row'>
        <div className='col s10 offset-s1 center-text'>
          <h3>{mainDetails.name}</h3>
          {forecastData.list}
        </div>
      </div>
    )
  }
})

module.exports = Forecast
