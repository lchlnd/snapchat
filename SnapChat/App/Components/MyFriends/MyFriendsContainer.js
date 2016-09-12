import React, { Component } from 'react'
import MyFriends from './MyFriends'

class MyFriendsContainer extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return <MyFriends backButtonPressed={this.backButtonPressed} />
  }
}

export default MyFriendsContainer
