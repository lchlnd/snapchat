import React, { Component, PropTypes } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import Login from './Login'
import { login } from './loginUtils'

class LoginContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      password: '',
      loading: false,
      isInputValid: false,
      errorState: false
    }

    this.backButtonPressed = this.backButtonPressed.bind(this)
    this.loginButtonPressed = this.loginButtonPressed.bind(this)
    this.updatePassword = this.updatePassword.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.toggleSpinner = this.toggleSpinner.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  updatePassword (updatedPassword) {
    if (updatedPassword && this.state.username) {
      this.setState({ password: updatedPassword, isInputValid: true })
    } else {
      this.setState({ password: updatedPassword, isInputValid: false })
    }
  }

  updateUsername (updatedUsername) {
    if (updatedUsername && this.state.password) {
      this.setState({ username: updatedUsername, isInputValid: true })
    } else {
      this.setState({ username: updatedUsername, isInputValid: false })
    }
  }

  toggleSpinner () {
    this.setState({
      loading: !this.state.loading
    })
  }

  loginButtonPressed () {
    const { username, password } = this.state
    this.toggleSpinner()

    login(username.toLowerCase(), password)
      .then((success) => {
        this.props.loginSuccess(success)
      })
      .catch((error) => {
        this.setState({
          errorState: true
        }, () => {
          // this weird shit makes the error message disappear after 4 seconds
          this.toggleSpinner()
          setTimeout(() => {
            this.setState({
              errorState: false
            })
          }, 4000)
        })
      })
  }

  render () {
    const spinner = this.state.loading
      ? <Spinner visible overlayColor='rgba(0,0,0,0.70)' />
      : null
    return (
      <Login
        errorMessage={this.state.errorMessage}
        backButtonPressed={this.backButtonPressed}
        loginButtonPressed={this.loginButtonPressed}
        updateUsername={this.updateUsername}
        updatePassword={this.updatePassword}
        hasValidInput={this.state.isInputValid}
        errorState={this.state.errorState} >
        {spinner}
      </Login>
    )
  }
}

LoginContainer.propTypes = {
  navigator: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired
}

export default LoginContainer
