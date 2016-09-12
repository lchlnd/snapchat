import React, { PropTypes } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import { backArrow } from '../Login/Login'
import { registerStyles as styles } from './registerStyles'

const RegisterName = ({
  backButtonPressed,
  signupButtonPressed,
  updateFirstname,
  updateLastname,
  hasValidInput
}) => (
  <View style={styles.container}>
    {backArrow(backButtonPressed)}
    <View style={styles.registerHeaderWrapper}>
      <Text style={styles.registerHeader}>What's your name?</Text>
    </View>
    <View style={styles.formContainer}>
      {inputFields(updateFirstname, updateLastname)}
      {signupButton(hasValidInput, signupButtonPressed)}
    </View>
  </View>
)

const func = PropTypes.func

RegisterName.propTypes = {
  backButtonPressed: func.isRequired,
  signupButtonPressed: func.isRequired,
  updateFirstname: func.isRequired,
  updateLastname: func.isRequired,
  hasValidInput: PropTypes.bool.isRequired
}

export default RegisterName

function inputFields (updateFirstname, updateLastname) {
  return (
    <View>

      <Text style={styles.inputLabel}>
        First Name
      </Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updateFirstname}
      />

      <Text style={styles.inputLabel}>
        Last Name
      </Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updateLastname}
      />

    </View>
  )
}

function signupButton (hasValidInput, signupButtonPressed) {
  return (
    <TouchableHighlight
      style={styles.signupButtonContainer}
      onPress={hasValidInput ? signupButtonPressed : () => {}} // TODO: can prob provide error msg
      underlayColor='#F5F5F5'
    >
      <View style={hasValidInput
        ? styles.signupButtonActivated
        : styles.signupButtonDeactivated}>
        <Text style={hasValidInput
          ? styles.signupButtonActivatedText
          : styles.signupButtonDeactivatedText}
        >
          Sign Up
        </Text>
      </View>
    </TouchableHighlight>
  )
}
