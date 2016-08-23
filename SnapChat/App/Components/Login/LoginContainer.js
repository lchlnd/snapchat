import React, { Component, PropTypes } from 'react'
import Login from './Login'

class LoginContainer extends Component {
  constructor (props) {
    super(props)
    this.backButtonPressed = this.backPressed.bind(this)
  }

  // navigator component gets passed down automatically as prop from index.ios.js (NavigatorIOS)
  // allows you to push or pop components onto the navigation stack
  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return <Login backButtonPressed={this.backButtonPressed} />
  }
}

LoginContainer.propTypes = {
  navigator: PropTypes.object
}

export default Login
