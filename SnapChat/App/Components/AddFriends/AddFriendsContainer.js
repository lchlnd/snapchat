import React, { Component } from 'react'
import AddFriends from './AddFriends'

class AddFriendsContainer extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return <AddFriends backButtonPressed={this.backButtonPressed} />
  }
}

export default AddFriendsContainer
