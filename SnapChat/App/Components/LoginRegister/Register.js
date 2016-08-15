import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { loginRegisterStyles as styles } from './loginRegisterStyles'

class Register extends Component {
  constructor (props) {
    super(props)
    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.logo}>
        <Text style={styles.text}>Registration UI</Text>
        <View>
          <TouchableHighlight onPress={this.backButtonPressed} style={styles.signupButton}>
            <Text style={styles.buttonText}>BACK</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

Register.propTypes = {
  navigator: PropTypes.object
}

export default Register
