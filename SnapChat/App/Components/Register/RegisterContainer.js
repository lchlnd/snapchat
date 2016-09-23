import React, { Component, PropTypes } from 'react'
import Spinner from 'react-native-loading-spinner-overlay'
import { AsyncStorage } from 'react-native'
import * as firebase from 'firebase'
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
      username: '',
      password: '',
      loading: false,
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

  toggleSpinner () {
    this.setState({
      loading: !this.state.loading
    })
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

  updateBirthday (updateBirthday) {
    this.setState({ birthday: updateBirthday, isBirthdayInputValid: true })
  }

  updateUsername (updatedUsername) {
    if (updatedUsername) {
      this.setState({ username: updatedUsername, isUsernameValid: true })
    } else {
      this.setState({ username: updatedUsername, isUsernameValid: false })
    }
  }

  updatePassword (updatedPassword) {
    if (updatedPassword) {
      this.setState({ password: updatedPassword, isPasswordInputValid: true })
    } else {
      this.setState({ password: updatedPassword, isPasswordInputValid: false })
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
    this.toggleSpinner()
    const { username, password } = this.state
    firebase.auth().createUserWithEmailAndPassword(username, password)
      .then((user) => {
        this.saveUser(user)
        this.updateUserDetails(user)
        this.toggleSpinner()
        this.props.loginSuccess()
      })
      .catch((error) => {
        this.toggleSpinner()
        console.log(error)
      })
  }

  async saveUser (user) {
    try {
      await AsyncStorage.setItem('userId', JSON.stringify(user.uid))
    } catch (error) {
      console.log('Error saving user to local storage: ', error)
    }
  }

  updateUserDetails (user) {
    const { username, firstname, lastname, birthday } = this.state
    const userId = user.uid
    firebase.database().ref('users/' + userId).set({
      username,
      firstname,
      lastname,
      birthday: JSON.stringify(birthday)
    })
  }

  render () {
    const spinner = this.state.loading
      ? <Spinner visible overlayColor='rgba(0,0,0,0.70)' />
      : null

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
        >
          {spinner}
        </RegisterPassword>
      )
    }
  }
}

RegisterContainer.propTypes = {
  navigator: PropTypes.object,
  loginSuccess: PropTypes.func
}

export default RegisterContainer
