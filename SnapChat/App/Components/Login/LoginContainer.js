import React, { Component, PropTypes } from 'react'
import Login from './Login'

class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      isInputValid: false
    }

    this.backButtonPressed = this.backButtonPressed.bind(this)
    this.loginButtonPressed = this.loginButtonPressed.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
  }

  componentDidUpdate (prevProps, prevState) {
    console.log(prevState)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  // simple validation for now
  updatePassword (updatedPassword) {
    if (updatedPassword.length >= 1 && this.state.password.length >= 1) {
      this.setState({ password: updatedPassword, isInputValid: true })
    } else {
      this.setState({ password: updatedPassword, isInputValid: false })
    }
  }

  updateUsername (updatedUsername) {
    if (updatedUsername >= 1 && this.state.password.length >= 1) {
      this.setState({ username: updatedUsername, isInputValid: true })
    } else {
      this.setState({ username: updatedUsername, isInputValid: false })
    }
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
      <Login
        backButtonPressed={this.backButtonPressed}
        loginButtonPressed={this.loginButtonPressed}
        updateUsername={this.updateUsername}
        updatePassword={this.updatePassword}
        hasValidInput={this.state.isInputValid}
      />
    )
  }
}

LoginContainer.propTypes = {
  navigator: PropTypes.object
}

export default LoginContainer
