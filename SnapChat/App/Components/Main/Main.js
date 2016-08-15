import React, { PropTypes, Component } from 'react'
import { Text, View, TouchableHighlight } from 'react-native'

// The root component container of the app that gets rendered after user has logged in
class Main extends Component {
  constructor (props) {
    super()
    this.state = {
      showProgress: false
    }
  }
  render () {
    return (
      <View>
        <Text>Snapchat Swipe UI</Text>
      </View>
    )
  }
}

export default Main
