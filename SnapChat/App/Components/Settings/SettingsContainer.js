import React, { Component } from 'react'
import Settings from './Settings'

class SettingsContainer extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return <Settings
      myAccountData={myAccountData}
      additionalServicesData={additionalServicesData}
      whoCanData={whoCanData}
      moreInformationData={moreInformationData}
      accountActionsData={accountActionsData}
      backButtonPressed={this.backButtonPressed}
        />
  }
}

export default SettingsContainer

const myAccountData = [
    {field: 'Name'},
    {field: 'Username'},
    {field: 'Birthday'},
    {field: 'Mobile Number'},
    {field: 'Email'},
    {field: 'Bitmoji'},
    {field: 'Password'},
    {field: 'Login Verification'},
    {field: 'Notifications'},
    {field: 'Memories'}
]

const additionalServicesData = [
    {field: 'Manage'}
]

const whoCanData = [
    {field: 'Contact me'},
    {field: 'View My Story'},
    {field: 'See me in Quick Add'}
]

const moreInformationData = [
    {field: 'Support'},
    {field: 'Privacy Policy'},
    {field: 'Terms of Service'},
    {field: 'Licences'}
]

const accountActionsData = [
    {field: 'Clear cache'},
    {field: 'Clear Conversations'},
    {field: 'Restore purchases'},
    {field: 'Blocked'},
    {field: 'Logout'}
]
