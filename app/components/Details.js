const React = require('react'),
      Link = require('react-router').Link

const Details = (props) => {
  const locationState = props.location.state
  console.log(locationState)
  return (
    <div className="row">
      <div style={{textAlign: 'center'}} className="col s6 offset-s3">
        <h2>{locationState.city}, {locationState.date}</h2>
        <h3>
          <img src={`http://openweathermap.org/img/w/${locationState.icon}.png`} />
          {locationState.weather.main}
        </h3>
        <p>{locationState.weather.description}</p>
        <p>High: {locationState.temp.max} degrees</p>
        <p>Low: {locationState.temp.min} degrees</p>
      </div>
    </div>
  )
}
module.exports = Details
