const React = require('react'),
      OpenWeather = require('../ajaxHelpers/OpenWeather'),
      hashHistory = require('react-router').hashHistory

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
      hashHistory.push({
        pathname: '/forecast',
        state: { forecast : response.data }
      })
    })
    .catch( (err) => {
      console.log('There was an error', err)
    })
  },
  render () {
    return (
        <form onSubmit={this.handleFormSubmit}>
            <div className="input-field col s6 offset-s1">
              <div className='row'>
                {/*<label for="weather">City, State</label>*/}
                <input id="weather" type="text" defaultValue={"City, State"}  onChange={this.handleInputChange}/>
              </div>
            </div>
            <div className="input-field col s4 offset-s1">
              <button className="btn waves-effect waves-light">Get Weather</button>
            </div>
        </form>
    )
  }
})

module.exports = WeatherForm
