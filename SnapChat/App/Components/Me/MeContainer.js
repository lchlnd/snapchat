import React, { Component, PropTypes } from 'react'
import Me from './Me'
import AddedMeContainer from '../AddedMe/AddedMeContainer'
import AddFriendsContainer from '../AddFriends/AddFriendsContainer'
import MyFriendsContainer from '../MyFriends/MyFriendsContainer'
import TrophyCaseContainer from '../TrophyCase/TrophyCaseContainer'
import SettingsContainer from '../Settings/SettingsContainer'

class MeContainer extends Component {
  constructor (props) {
    super(props)

    this.addedMePressed = this.addedMePressed.bind(this)
    this.addFriendsPressed = this.addFriendsPressed.bind(this)
    this.myFriendsPressed = this.myFriendsPressed.bind(this)
    this.cameraBackPressed = this.cameraBackPressed.bind(this)
    this.trophyCasePressed = this.trophyCasePressed.bind(this)
    this.settingsPressed = this.settingsPressed.bind(this)
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

  trophyCasePressed () {
    this.props.navigator.push({
      title: 'TrophyCaseContainer',
      component: TrophyCaseContainer
    })
  }

  settingsPressed () {
    this.props.navigator.push({
      title: 'SettingsContainer',
      component: SettingsContainer
    })
  }

  render () {
    return (
      <Me
        addedMePressed={this.addedMePressed}
        cameraBackPressed={this.cameraBackPressed}
        myFriendsPressed={this.myFriendsPressed}
        addFriendsPressed={this.addFriendsPressed}
        trophyCasePressed={this.trophyCasePressed}
        settingsPressed={this.settingsPressed} />
    )
  }
}

MeContainer.propTypes = {
  navigator: PropTypes.object
}

export default MeContainer
