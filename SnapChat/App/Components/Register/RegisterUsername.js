import React, { PropTypes } from 'react'
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import { backArrow } from '../Login/Login'
import { registerStyles as styles } from './registerStyles'

const RegisterUsername = ({
  backButtonPressed,
  continueButtonPressed,
  updateUsername,
  hasValidInput
}) => (
  <View style={styles.container}>
    {backArrow(backButtonPressed)}

    <View style={styles.registerHeaderWrapper}>
      <Text style={styles.registerHeader}>Enter you email</Text>
    </View>

    <View style={styles.formContainer}>
      {inputFields(updateUsername)}
      {continueButton(hasValidInput, continueButtonPressed)}
    </View>

  </View>
)

const func = PropTypes.func

RegisterUsername.propTypes = {
  backButtonPressed: func.isRequired,
  continueButtonPressed: func.isRequired,
  updateUsername: func.isRequired,
  hasValidInput: PropTypes.bool
}

export default RegisterUsername

function inputFields (updateUsername) {
  return (
    <View>
      <Text style={styles.inputLabel}>
        Friends use your email to add you on Snapchat.
      </Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updateUsername}
      />
    </View>
  )
}

function continueButton (hasValidInput, continueButtonPressed) {
  return (
    <TouchableHighlight
      style={styles.signupButtonContainer}
      onPress={hasValidInput ? continueButtonPressed : () => {}} // TODO: can prob provide error msg
      underlayColor='#F5F5F5'
    >
      <View style={hasValidInput
        ? styles.signupButtonActivated
        : styles.signupButtonDeactivated}>
        <Text style={hasValidInput
          ? styles.signupButtonActivatedText
          : styles.signupButtonDeactivatedText}
        >
          Continue
        </Text>
      </View>
    </TouchableHighlight>
  )
}
