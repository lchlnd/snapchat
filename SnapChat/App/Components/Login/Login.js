import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import { loginStyles as styles } from './loginStyles'

const Login = ({
  backButtonPressed,
  updateUsername,
  updatePassword,
  loginButtonPressed,
  hasValidInput
}) => {
  console.log(hasValidInput)
  return ( <View style={styles.container}>
    <View style={{backgroundColor: 'transparent'}}>
      <TouchableHighlight
        style={styles.backArrowContainer}
        onPress={backButtonPressed}
        underlayColor="#F5F5F5"
      >
        <Image
          style={styles.backArrow}
          source={require('../../../images/back_arrow.png')}
        />
      </TouchableHighlight>
    </View>

    <View style={styles.loginHeaderWrapper}>
      <Text style={styles.loginHeader}>Log In</Text>
    </View>

    <View style={styles.formContainer}>
      <Text style={styles.inputLabel}>Username Or Email</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updateUsername}
      />

      <Text style={styles.inputLabel}>Password</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={updatePassword}
      />

      <TouchableHighlight
        style={styles.loginButtonContainer}
        onPress={hasValidInput ? loginButtonPressed : () => {}} // TODO: can prob provide error msg
        underlayColor="#F5F5F5"
      >
        <View style={hasValidInput
          ? styles.loginButtonActivated
          : styles.loginButtonDeactivated}>
          <Text style={hasValidInput
            ? styles.loginButtonActivatedText
            : styles.loginButtonDeactivatedText}>Log In</Text>
        </View>
      </TouchableHighlight>

    </View>
  </View>
)}

const func = PropTypes.func.isRequired

Login.propTypes = {
  backButtonPressed: func,
  updateUsername: func,
  updatePassword: func,
  loginButtonPressed: func,
  hasValidInput: PropTypes.bool.isRequired
}

export default Login
