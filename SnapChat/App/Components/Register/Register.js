import React, { PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { registerStyles as styles } from './registerStyles'

const Register = ({ backButtonPressed }) => (
  <View>
    <Text>THIS IS THE REGISTRATION PAGE</Text>
    <View>
      <TouchableHighlight onPress={backButtonPressed} >
        <Text>Back</Text>
      </TouchableHighlight>
    </View>
  </View>
)

Register.propTypes = {
  backButtonPressed: PropTypes.func.isRequired
}

export default Register
