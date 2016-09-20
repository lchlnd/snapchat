import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import { loginStyles as styles } from './loginStyles'

const Login = ({
  backButtonPressed,
  updateUsername,
  updatePassword,
  loginButtonPressed,
  hasValidInput,
  children,
  errorState
}) => (
  <View style={styles.container}>
    {backArrow(backButtonPressed)}

    <View style={styles.loginHeaderWrapper}>
      <Text style={styles.loginHeader}>Log In</Text>
    </View>

    {children}

    <View style={styles.formContainer}>
      {inputFields(updateUsername, updatePassword)}
      {loginButton(hasValidInput, loginButtonPressed, errorState)}
    </View>
  </View>
)

const func = PropTypes.func.isRequired

Login.propTypes = {
  backButtonPressed: func,
  updateUsername: func,
  updatePassword: func,
  loginButtonPressed: func,
  children: PropTypes.object,
  hasValidInput: PropTypes.bool.isRequired,
  errorState: PropTypes.bool
}

export default Login

export function backArrow (backButtonPressed) {
  return (
    <View style={{backgroundColor: 'transparent'}}>
      <TouchableHighlight
        style={styles.backArrowContainer}
        onPress={backButtonPressed}
        underlayColor='#F5F5F5'
      >
        <Image
          style={styles.backArrow}
          source={require('../../../images/back_arrow.png')}
        />
      </TouchableHighlight>
    </View>
  )
}

function inputFields (updateUsername, updatePassword) {
  return (
    <View>
      <Text style={styles.inputLabel}>
        Email
      </Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updateUsername}
      />
      <Text style={styles.inputLabel}>
        Password
      </Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updatePassword}
      />
    </View>
  )
}

function loginButton (hasValidInput, loginButtonPressed, errorState) {
  let errorNotifcation = null
  if (errorState) {
    errorNotifcation = <Text style={styles.errorMessage}>Could not validate email or password</Text>
  }
  return (
    <View>
      <TouchableHighlight
        style={styles.loginButtonContainer}
        onPress={hasValidInput ? loginButtonPressed : () => {}}
        underlayColor='#F5F5F5'
      >
        <View style={hasValidInput
          ? styles.loginButtonActivated
          : styles.loginButtonDeactivated}>
          <Text style={hasValidInput
            ? styles.loginButtonActivatedText
            : styles.loginButtonDeactivatedText}>
            Log In
          </Text>
        </View>
      </TouchableHighlight>
      {errorNotifcation}
    </View>
  )
}
