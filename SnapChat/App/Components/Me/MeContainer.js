import React, { Component, PropTypes } from 'react'
import Me from './Me'
import AddedMeContainer from '../AddedMe/AddedMeContainer'
import AddFriendsContainer from '../AddFriends/AddFriendsContainer'
import MyFriendsContainer from '../MyFriends/MyFriendsContainer'

class MeContainer extends Component {
  constructor (props) {
    super(props)

      this.addedMePressed = this.addedMePressed.bind(this)
      this.addFriendsPressed = this.addFriendsPressed.bind(this)
      this.myFriendsPressed = this.myFriendsPressed.bind(this)
      this.cameraBackPressed = this.cameraBackPressed.bind(this)
  }

    addedMePressed () {
        this.props.navigator.push({
            title: 'AddedMeContainer',
            component: AddedMeContainer
        })
    }

    addFriendsPressed () {
        this.props.navigator.push({
            title: 'AddFriendsContainer',
            component: AddFriendsContainer
        })
    }

    myFriendsPressed () {
        this.props.navigator.push({
            title: 'MyFriendsContainer',
            component: MyFriendsContainer
        })
    }

    cameraBackPressed () {
        this.props.navigator.pop()
    }


  render () {
    return <Me
        addedMePressed={this.addedMePressed}
        cameraBackPressed={this.cameraBackPressed}
        myFriendsPressed={this.myFriendsPressed}
        addFriendsPressed={this.addFriendsPressed}
        />
  }
}

MeContainer.propTypes = {
    navigator: PropTypes.object
}

export default MeContainer
