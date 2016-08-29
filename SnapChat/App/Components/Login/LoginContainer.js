import React, { Component, PropTypes } from 'react'
import Login from './Login'

class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

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

export default LoginContainer
