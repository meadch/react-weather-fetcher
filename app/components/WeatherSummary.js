const React = require('react'),
      Link = require('react-router').Link

const WeatherSummary = (props) => {
  // Format date
  const date = new Date(props.forecast.dt * 1000)
                        .toLocaleString('en-US', {
                                                    weekday: 'short',
                                                    month: 'long',
                                                    day: 'numeric'
                                                  })
  const icon = props.forecast.weather[0].icon
  return (
        <div className="card col s4 m3">
          <Link to={ { pathname: '/details',
                      state: {
                        date: date,
                        city: props.location,
                        weather: props.forecast.weather[0],
                        temp: props.forecast.temp,
                        icon: icon

                      }
                    }}
                    >
            <div className="card-title">
              <p>{date} <img src={`http://openweathermap.org/img/w/${icon}.png`} /></p>
            </div>
        </Link>
        </div>
  )
}

module.exports = WeatherSummary
