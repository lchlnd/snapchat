import React, { Component, PropTypes } from 'react'
import { Text, View, Image, TouchableHighlight } from 'react-native'
import { landingStyles as styles } from './landingStyles'
import LoginContainer from '../Login/LoginContainer'
import RegisterContainer from '../Register/RegisterContainer'

class Landing extends Component {
  constructor (props) {
    super(props)

    this.state = {
      logoActive: false
    }

    this.loginButtonPressed = this.loginButtonPressed.bind(this)
    this.registerButtonPressed = this.registerButtonPressed.bind(this)
    this.onPressIn = this.onPressIn.bind(this)
    this.onPressOut = this.onPressOut.bind(this)
  }

  loginButtonPressed () {
    this.props.navigator.push({
      component: LoginContainer,
      passProps: {
        loginSuccess: this.props.loginSuccess
      }
    })
  }

  registerButtonPressed () {
    this.props.navigator.push({
      title: 'RegisterContainer',
      component: RegisterContainer,
      passProps: {
        loginSuccess: this.props.loginSuccess
      }
    })
  }

  onPressIn () {
    this.setState({logoActive: true})
  }

  onPressOut () {
    this.setState({logoActive: false})
  }

  render () {
    const logo = this.state.logoActive
      ? <Image style={styles.logo} source={require('../../../images/logo_active.png')} />
      : <Image style={styles.logo} source={require('../../../images/logo.png')} />
    return (
      <View style={styles.container}>
        <View>
          {logo}
        </View>
        <View style={styles.footer}>
          <TouchableHighlight onPress={this.loginButtonPressed} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
            <View style={styles.loginButton}>
              <Text style={styles.buttonText}>
                LOG IN
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.registerButtonPressed} onPressIn={this.onPressIn} onPressOut={this.onPressOut}>
            <View style={styles.signupButton}>
              <Text style={styles.buttonText}>
                SIGN UP
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

Landing.propTypes = {
  navigator: PropTypes.object,
  loginSuccess: PropTypes.func.isRequired
}

export default Landing
