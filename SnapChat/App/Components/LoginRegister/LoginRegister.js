import React, { Component, PropTypes } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { loginRegisterStyles as styles } from './loginRegisterStyles'
import Login from './Login'
import Register from './Register'

// Container component that shows the initial screen of either signing into the app, or registering
class LoginRegister extends Component {
  constructor (props) {
    super(props)
    // need to bind the context of 'this' to this class, so the methods have the right context when they are called
    this.loginButtonPressed = this.loginButtonPressed.bind(this)
    this.registerButtonPressed = this.registerButtonPressed.bind(this)
  }

  loginButtonPressed () {
    this.props.navigator.push({
      title: 'Login',
      component: Login
    })
  }

  registerButtonPressed () {
    this.props.navigator.push({
      title: 'Login',
      component: Register
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Text style={styles.buttonText}>SnepChert</Text>
        </View>

        <View style={styles.footer}>
          <TouchableHighlight onPress={this.loginButtonPressed}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>LOG IN</Text>
            </View>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.registerButtonPressed}>
            <View style={styles.signupButton}>
              <Text style={styles.buttonText}>SIGN UP</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
     )
  }
}

// this is just declaring the stuff this component expects to receive, more for documentation.
// so you can just look at the prop types then the render method to understand whats going on
LoginRegister.propTypes = {
  navigator: PropTypes.object
}

export default LoginRegister
