import React, { PropTypes } from 'react'
import { Text, View, DatePickerIOS, TouchableHighlight } from 'react-native'
import { backArrow } from '../Login/Login'
import { registerStyles as styles } from './registerStyles'

const RegisterBirthday = ({
  backButtonPressed,
  updateBirthday,
  continueButtonPressed,
  birthday,
  hasValidInput
}) => (
  <View style={styles.container}>
    {backArrow(backButtonPressed)}
    <View style={styles.registerHeaderWrapper}>
      <Text style={styles.registerHeader}>
        When's your birthday?
      </Text>
    </View>
    <DatePickerIOS
      date={birthday}
      onDateChange={updateBirthday}
      mode={'date'}
      timeZoneOffsetInMinutes={-1 * new Date().getTimezoneOffset()} />
    {continueButton(hasValidInput, continueButtonPressed)}
  </View>
)

const func = PropTypes.func
RegisterBirthday.propTypes = {
  backButtonPressed: func.isRequired,
  updateBirthday: func.isRequired,
  continueButtonPressed: func.isRequired,
  birthday: PropTypes.instanceOf(Date),
  hasValidInput: PropTypes.bool.isRequired
}

export default RegisterBirthday

function continueButton (hasValidInput, continueButtonPressed) {
  return (
    <TouchableHighlight
      style={styles.signupButtonContainer}
      onPress={hasValidInput ? continueButtonPressed : () => {}}
      underlayColor='#F5F5F5'>
      <View style={hasValidInput
                     ? styles.signupButtonActivated
                     : styles.signupButtonDeactivated}>
        <Text style={hasValidInput
                       ? styles.signupButtonActivatedText
                       : styles.signupButtonDeactivatedText}>
          Continue
        </Text>
      </View>
    </TouchableHighlight>
  )
}
