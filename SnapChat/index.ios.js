import React, { Component } from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'
import Landing from './App/Components/Landing/Landing'
import Main from './App/Components/Main/Main'
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyA1ibIJsCQv8KBNMhg5D91PvuYI3QM5viU',
  authDomain: 'snapchat-da2b5.firebaseapp.com',
  databaseURL: 'https://snapchat-da2b5.firebaseio.com',
  storageBucket: 'snapchat-da2b5.appspot.com',
  messagingSenderId: '927676989151'
}

firebase.initializeApp(firebaseConfig)

class SnapChat extends Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
    // TODO: can check here if user is logged in
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin () {
    this.setState({isLoggedIn: true})
  }

  render () {
    if (!this.state.isLoggedIn) {
      return (
        <NavigatorIOS
          navigationBarHidden
          style={{flex: 1}}
          initialRoute={{
            title: 'Landing',
            component: Landing,
            passProps: {
              loginSuccess: this.onLogin
            }
          }}
        />
      )
    }
    return <Main />
  }
}

AppRegistry.registerComponent('SnapChat', () => SnapChat)
