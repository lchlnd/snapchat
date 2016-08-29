import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, TextInput } from 'react-native'
import { loginStyles as styles } from './loginStyles'

// can use [] for style={[]}
const Login = ({ backButtonPressed }) => (
  <View style={styles.container}>

    <View>
      <TouchableHighlight onPress={backButtonPressed}>
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
      </TouchableHighlight>
    </View>

    <View style={styles.loginHeaderWrapper}>
      <Text style={styles.loginHeader}>Log In</Text>
    </View>

    <View style={styles.formContainer}>
      <TextInput
        style={styles.formInput}
      />
      <TextInput
        style={styles.formInput}
      />
    </View>
  </View>
)

Login.propTypes = {
  backButtonPressed: PropTypes.func
}

export default Login
