const React = require('react'),
      OpenWeather = require('../ajaxHelpers/OpenWeather')

const WeatherForm = React.createClass({
  getInitialState (){
    return {
      location: ''
    }
  },
  handleInputChange (e) {
    this.setState({
      location: e.target.value
    })
  },
  handleFormSubmit (e) {
    e.preventDefault();
    OpenWeather.getForcastByCity(this.state.location)
    .then( (response) => {
      console.log(response)
      // Send to another route
    })
    .catch( (err) => {
      console.log('There was an error', err)
    })
  },
  render () {
    return (
      <div className="row">
        <form className="col s12" onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="input-field col s3 offset-s5">
              <label for="weather">City, State</label>
              <input id="weather" type="text" value={this.state.location} onChange={this.handleInputChange}/>
              <button className="btn waves-effect waves-light">Fetch Weather</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm
