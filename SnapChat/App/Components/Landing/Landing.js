import React, { Component, PropTypes } from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { landingStyles as styles } from './landingStyles'
import LoginContainer from '../Login/LoginContainer'
import RegisterContainer from '../Register/RegisterContainer'

class Landing extends Component {
  constructor (props) {
    super(props)
    // need to bind the context of 'this' to this class, so the methods have the right context when they are called
    this.loginButtonPressed = this.loginButtonPressed.bind(this)
    this.registerButtonPressed = this.registerButtonPressed.bind(this)
  }

  loginButtonPressed () {
    this.props.navigator.push({
      title: 'LoginContainer',
      component: LoginContainer
    })
  }

  registerButtonPressed () {
    this.props.navigator.push({
      title: 'RegisterContainer',
      component: RegisterContainer
    })
  }

  render () {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.logo} source={require('../../../images/logo.png')} />
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
Landing.propTypes = {
  navigator: PropTypes.object
}

export default Landing
