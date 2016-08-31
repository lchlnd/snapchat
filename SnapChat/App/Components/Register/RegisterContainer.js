import React, { Component, PropTypes } from 'react'
import Register from './Register'

class RegisterContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      isValidInput: false
    }

    this.backButtonPressed = this.backButtonPressed.bind(this)
    this.updateFirstname = this.updateFirstname.bind(this)
    this.updateLastname = this.updateLastname.bind(this)
    this.signupButtonPressed = this.signupButtonPressed.bind(this)
  }

  updateFirstname (e) {
    this.setState({firstname: e})
  }

  updateLastname () {
    this.setState({lastname: e})
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  signupButtonPressed () {

  }

  // return an ios navigator, push from register
  render () {
    return (
      <Register
        backButtonPressed={this.backButtonPressed}
        signupButtonPressed={this.signupButtonPressed}
        updateFirstname={this.updateFirstname}
        updateLastname={this.updateLastname}
        hasValidInput={this.state.isValidInput}
      />
    )
  }
}

RegisterContainer.propTypes = {
  navigator: PropTypes.object
}

export default RegisterContainer
