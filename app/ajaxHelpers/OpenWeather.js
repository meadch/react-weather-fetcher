const axios = require('axios'),
      APIKEY = "80e73c32ceaf6ebc552dd310cb92431a"

const OpenWeatherHelpers = {
  getForcastByCity (locationInfo) {
    return axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${locationInfo}&APPID=80e73c32ceaf6ebc552dd310cb92431a`)
    .catch( (err) => {
      console.log('There was an error', err)
    })
  }
}

module.exports = OpenWeatherHelpers
