const React = require('react'),
      PropTypes = React.PropTypes,
      Link = require('react-router').Link,
      WeatherForm = require('./WeatherForm')

const Header = React.createClass({
  propTypes: {
    logo: PropTypes.string.isRequired
  },
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s2 offset-s1">
              <Link to="/" className="brand-logo">{this.props.logo}</Link>
            </div>
            <div className="col s6 right offset-s1">
              <WeatherForm />
            </div>
        </div>
        </div>
      </nav>
    )
  }
})

module.exports = Header
