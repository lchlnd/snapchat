import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import { loginStyles as styles } from './loginStyles'

const Login = ({ backButtonPressed }) => (
  <View>
    <Text>THIS IS THE LOGIN PAGE</Text>
    <View>
      <TouchableHighlight onPress={backButtonPressed}>
        <Text>BACK</Text>
      </TouchableHighlight>
    </View>
  </View>
)

Login.propTypes = {
  backButtonPressed: PropTypes.func.isRequired
}

export default Login
