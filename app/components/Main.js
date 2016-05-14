const React = require("react"),
      Header = require('./Header'),
      Footer = require('./Footer')

module.exports = React.createClass({
  render(){
    return (
      <div className="container">
        <Header logo="Fetch Weather"/>
        {this.props.children}
        <Footer heading="Weather Fetcher"
                summary="Made with React.js by Charlie Mead (2016)"
                links={[{url: '/', text: 'Home'}]}
                />
      </div>
    )
  }
})
