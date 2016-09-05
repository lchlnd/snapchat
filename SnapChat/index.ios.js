import React, { Component } from 'react'
import { AppRegistry, NavigatorIOS } from 'react-native'
import Landing from './App/Components/Landing/Landing'
import Edit from './App/Components/Edit/Edit'

class SnapChat extends Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
    this.onLogin = this.onLogin.bind(this)
  }

  // this.setState triggers the components render method to re-fire, and re-renders the component with the updated component state
  onLogin () {
    this.setState({isLoggedIn: true})
  }

  // If person is not logged in give them login/reg screen, otherwise let them into the app
  // The login/register component is wrapped by a navigator component to allow navigation to either route
  render () {
    // if (!this.state.isLoggedIn) {
    //   return (
    //     <NavigatorIOS
    //       navigationBarHidden
    //       style={{flex: 1}}
    //       initialRoute={{
    //         title: 'SnapChat',
    //         component: Landing
    //       }}
    //     />
    //   )
    // }
    return <Edit />
  }
}

AppRegistry.registerComponent('SnapChat', () => SnapChat)
