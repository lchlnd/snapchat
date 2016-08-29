import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import { loginStyles as styles } from './loginStyles'

// can use [] for style={[]}
const Login = ({ backButtonPressed, updateUsername, updatePassword }) => (
  <View style={styles.container}>

    <View style={{backgroundColor: 'transparent'}}>
      <TouchableHighlight
        style={styles.backArrowContainer}
        onPress={backButtonPressed}
        underlayColor="#F5F5F5"
      >
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
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

      <View style={styles.loginButtonContainer}>
        <TouchableHighlight>

        </TouchableHighlight>
      </View>

    </View>
  </View>
)

Login.propTypes = {
  backButtonPressed: PropTypes.func
}

export default Login
