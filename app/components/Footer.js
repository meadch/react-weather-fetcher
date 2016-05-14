const React = require('react'),
      PropTypes = React.PropTypes,
      Link = require('react-router').Link

const FooterLinks = (props) => {
  let footerLinks = props.links.map( (linkObj, idx) => (
    <li key={idx}><Link to={linkObj.url} className="grey-text text-lighten-3">{linkObj.text}</Link></li>
  ))
  return (
    <ul>
      {footerLinks}
    </ul>
  )
}
FooterLinks.propTypes = {
  links: PropTypes.array
}

const Footer = React.createClass({
  propTypes: {
    heading: PropTypes.string,
    summary: PropTypes.string,
    copyright: PropTypes.string,
    links: PropTypes.array
  },
  render () {
    return (
      <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">{this.props.heading}</h5>
                <p className="grey-text text-lighten-4">{this.props.summary}</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <FooterLinks links={this.props.links}/>
              </div>
            </div>
          </div>
        </footer>
    )
  }
})

module.exports = Footer
