import React, { Component, PropTypes } from 'react'
import RegisterName from './RegisterName'
import RegisterBirthday from './RegisterBirthday'
import RegisterUsername from './RegisterUsername'
import RegisterPassword from './RegisterPassword'

class RegisterContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      firstname: '',
      lastname: '',
      birthday: new Date(),
      isNameInputValid: false,
      isBirthdayInputValid: false,
      isUsernameInputValid: false,
      isPasswordInputValid: false,
      nameComplete: false,
      birthdayComplete: false,
      usernameComplete: false
    }

    this.backButtonPressed = this.backButtonPressed.bind(this)
    this.updateFirstname = this.updateFirstname.bind(this)
    this.updateLastname = this.updateLastname.bind(this)
    this.updateBirthday = this.updateBirthday.bind(this)
    this.updateUsername = this.updateUsername.bind(this)
    this.updatePassword = this.updatePassword.bind(this)

    this.goToRegisterBirthday = this.goToRegisterBirthday.bind(this)
    this.goToRegisterUsername = this.goToRegisterUsername.bind(this)
    this.goToRegisterPassword = this.goToRegisterPassword.bind(this)
    this.finishRegistration = this.finishRegistration.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  updateFirstname (updatedFirstname) {
    if (updatedFirstname && this.state.lastname) {
      this.setState({ firstname: updatedFirstname, isNameInputValid: true })
    } else {
      this.setState({ firstname: updatedFirstname, isNameInputValid: false })
    }
  }

  updateLastname (updatedLastname) {
    if (updatedLastname && this.state.firstname) {
      this.setState({ lastname: updatedLastname, isNameInputValid: true })
    } else {
      this.setState({ lastname: updatedLastname, isNameInputValid: false })
    }
  }

  // doesn't stop people putting birthdays in the future but yolo
  updateBirthday (updateBirthday) {
    this.setState({ birthday: updateBirthday, isBirthdayInputValid: true })
  }

  // same with this one, could verify username doesn't already exist in firebase here
  updateUsername (updatedUsername) {
    if (updatedUsername) {
      this.setState({ username: updatedUsername, isUsernameValid: true })
    } else {
      this.setState({ username: updatedUsername, isUsernameValid: false })
    }
  }

  updatePassword (updatedPassword) {
    if (updatedPassword) {
      this.setState({ username: updatedPassword, isPasswordInputValid: true })
    } else {
      this.setState({ username: updatedPassword, isPasswordInputValid: false })
    }
  }

  goToRegisterBirthday () {
    this.setState({ nameComplete: true })
  }

  goToRegisterUsername () {
    this.setState({ birthdayComplete: true })
  }

  goToRegisterPassword () {
    this.setState({ usernameComplete: true })
  }

  finishRegistration () {
    console.log(JSON.stringify(this.state))
  }

  // hacky way to emulate the UX flow of snapchat's register
  render () {
    if (!this.state.nameComplete) {
      return (
        <RegisterName
          backButtonPressed={this.backButtonPressed}
          signupButtonPressed={this.goToRegisterBirthday}
          updateFirstname={this.updateFirstname}
          updateLastname={this.updateLastname}
          hasValidInput={this.state.isNameInputValid}
        />
      )
    } else if (this.state.nameComplete && !this.state.birthdayComplete) {
      return (
        <RegisterBirthday
          backButtonPressed={this.backButtonPressed}
          birthday={this.state.birthday}
          updateBirthday={this.updateBirthday}
          continueButtonPressed={this.goToRegisterUsername}
          hasValidInput={this.state.isBirthdayInputValid}
        />
      )
    } else if (this.state.birthdayComplete && !this.state.usernameComplete) {
      return (
        <RegisterUsername
          backButtonPressed={this.backButtonPressed}
          updateUsername={this.updateUsername}
          continueButtonPressed={this.goToRegisterPassword}
          hasValidInput={this.state.isUsernameValid}
        />
      )
    } else if (this.state.usernameComplete) {
      return (
        <RegisterPassword
          backButtonPressed={this.backButtonPressed}
          updatePassword={this.updatePassword}
          finishButtonPressed={this.finishRegistration}
          hasValidInput={this.state.isPasswordInputValid}
        />
      )
    }
  }
}

RegisterContainer.propTypes = {
  navigator: PropTypes.object
}

export default RegisterContainer
