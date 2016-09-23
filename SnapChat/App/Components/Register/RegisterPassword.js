import React, { PropTypes } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import { backArrow } from '../Login/Login'
import { registerStyles as styles } from './registerStyles'

const RegisterPassword = ({
  backButtonPressed,
  finishButtonPressed,
  updatePassword,
  hasValidInput,
  children
}) => (
  <View style={styles.container}>
    {backArrow(backButtonPressed)}

    <View style={styles.registerHeaderWrapper}>
      <Text style={styles.registerHeader}>Choose a password</Text>
    </View>

    <View style={styles.formContainer}>
      {inputFields(updatePassword)}
      {continueButton(hasValidInput, finishButtonPressed)}
    </View>

    {children}

  </View>
)

const func = PropTypes.func

RegisterPassword.propTypes = {
  backButtonPressed: func.isRequired,
  finishButtonPressed: func.isRequired,
  updatePassword: func.isRequired,
  hasValidInput: PropTypes.bool.isRequired,
  children: PropTypes.object
}

export default RegisterPassword

function inputFields (updatePassword) {
  return (
    <View>
      <Text style={styles.inputLabel}>
        Passwords must be at least 6 characters.
      </Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updatePassword}
      />
    </View>
  )
}

function continueButton (hasValidInput, finishButtonPressed) {
  return (
    <TouchableHighlight
      style={styles.signupButtonContainer}
      onPress={hasValidInput ? finishButtonPressed : () => {}} // TODO: can prob provide error msg
      underlayColor='#F5F5F5'
    >
      <View style={hasValidInput
        ? styles.signupButtonActivated
        : styles.signupButtonDeactivated}>
        <Text style={hasValidInput
          ? styles.signupButtonActivatedText
          : styles.signupButtonDeactivatedText}
        >
          Finish
        </Text>
      </View>
    </TouchableHighlight>
  )
}
