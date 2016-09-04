import React, { Component } from 'react'
import { AppRegistry, NavigatorIOS, ListView } from 'react-native'
import Landing from './App/Components/Landing/Landing'
import Main from './App/Components/Main/Main'

// import ChatContainer from './App/Components/Chat/ChatContainer'
import StoriesContainer from './App/Components/Story/StoryContainer'

class SnapChat extends Component {
  constructor () {
    super()
    this.state = {
      isLoggedIn: false
    }
  }


  // this.setState triggers the components render method to re-fire, and re-renders the component with the updated component state
  onLogin () {
    this.setState({isLoggedIn: true})
  }

  // If person is not logged in give them login/reg screen, otherwise let them into the app
  // The login/register component is wrapped by a navigator component to allow navigation to either route
  render () {
    if (!this.state.isLoggedIn) {
      return (
        <NavigatorIOS
          navigationBarHidden
          style={{flex: 1}}
          initialRoute={{
            title: 'SnapChat',
            component: StoriesContainer
          }}
        />
      )
    }
    return <Main />
  }
}



AppRegistry.registerComponent('SnapChat', () => SnapChat)
