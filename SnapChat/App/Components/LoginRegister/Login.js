import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { loginRegisterStyles as styles } from './loginRegisterStyles'

class Login extends Component {
  constructor (props) {
    super(props)
    this.backPressed = this.backPressed.bind(this)
    console.log(props)
  }

  // navigator component gets passed down automatically as prop from index.ios.js (NavigatorIOS)
  // allows you to push or pop components onto the navigation stack
  backPressed () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.logo}>
        <Text style={styles.text}>word up</Text>
        <View>
          <TouchableHighlight onPress={this.backPressed} style={styles.loginButton}>
            <Text style={styles.buttonText}>BACK</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

Login.propTypes = {
  navigator: PropTypes.object
}

export default Login
