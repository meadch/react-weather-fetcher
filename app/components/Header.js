const React = require('react'),
      PropTypes = React.PropTypes,
      Link = require('react-router').Link

const Header = React.createClass({
  propTypes: {
    logo: PropTypes.string.isRequired
  },
  render () {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo">{this.props.logo}</Link>
        </div>
      </nav>
    )
  }
})

module.exports = Header
