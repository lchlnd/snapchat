import React, { Component, PropTypes } from 'react'
import Login from './Login'

class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.backButtonPressed = this.backButtonPressed.bind(this)
    this.loginButtonPressed = this.loginButtonPressed.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  updateUsername (updatedUsername) {
    this.setState({ username: updatedUsername })
  }

  updatePassword (updatedPassword) {
    this.setState({ password: updatedPassword })
  }

  loginButtonPressed () {
    const { username, password } = this.state
    const postRequest = {
      username,
      password
    }
    console.log(JSON.stringify(postRequest))
  }

  render () {
    return (
      <Login backButtonPressed={this.backButtonPressed}
             loginButtonPressed={this.loginButtonPressed}
             updateUsername={this.updateUsername}
             updatePassword={this.updatePassword} />)
  }
}

LoginContainer.propTypes = {
  navigator: PropTypes.object
}

export default LoginContainer
