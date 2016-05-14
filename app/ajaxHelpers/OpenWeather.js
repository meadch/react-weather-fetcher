const axios = require('axios'),
      APIKEY = require("../private.json").secret_key


const OpenWeatherHelpers = {
  getForcastByCity (locationInfo) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${locationInfo}&units=imperial&APPID=${APIKEY}`)
    .catch( (err) => {
      console.log('There was an error', err)
    })
  }
}

module.exports = OpenWeatherHelpers
