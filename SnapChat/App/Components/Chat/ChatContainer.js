import React, {PropTypes} from 'react'
import Chat from './Chat'
import {ListView} from 'react-native'
import ChatToUser from './ChatToUser'



class ChatContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: friendsDataSource.cloneWithRows([])
    }

    this.openChat = this.openChat.bind(this)
    this.backToChat = this.backToChat.bind(this)
  }

  componentDidMount () {
    mockAPICall((err, res) => {
      console.log('res', res)
      if (err) return
      else {
        this.setState({
          dataSource: friendsDataSource.cloneWithRows(res)
        })
      }
    })
  }

  backToChat(){
    this.props.navigator.replace({
      title:'chat',
      component:ChatContainer
    })
  }

  openChat(username){
    // here we would call API do get data for each user & there messages

    let newMessages = messages.slice(0)
    newMessages.push({message:`Hello my name is ${username}`, from:username})
    newMessages.push({message:`Hi there i am the user`})
    newMessages.push({message:`You are such a dick m8`, from:username})
    newMessages.push({message:`Go fuck yourself ${username}`})
    this.props.navigator.push({
      title:'Chat w'+username,
      component:ChatToUser,
      passProps:{
        username: username,
        messages: messagesDataSource.cloneWithRows(newMessages),
        onBackPress: this.backToChat
      }
    })
  }

  render () {
    return (<Chat friends={this.state.dataSource} openChat={this.openChat}/>)
  }
}


export default ChatContainer

// mock data
import constants from '../../constants'

const mockAPICall = (cb) => {
  setTimeout(() => cb(null, friends), 300)
}

var friendsDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
const friends = [
  {
    name: 'lachlan',
    lastReceived: '5m',
    receivedStatus: constants.IMAGE_RECEIVED
  },
  {
    name: 'ryan',
    lastReceived: '16h',
    receivedStatus: constants.IMAGE_RECEIVED
  },
  {
    name: 'nathan',
    lastReceived: '10m',
    receivedStatus: constants.IMAGE_RECEIVED_SEEN
  },
  {
    name: 'tim',
    lastReceived: '30m',
    receivedStatus: constants.IMAGE_SENT
  },
  {
    name: 'remdogga',
    lastReceived: 'just now',
    receivedStatus: constants.IMAGE_SENT_SEEN
  },
  {
    name: 'hot_chick_69',
    lastReceived: 'never',
    receivedStatus: constants.TEXT_SENT
  },
  {
    name: 'side_chick_01',
    lastReceived: '1m',
    receivedStatus: constants.TEXT_SENT_SEEN
  },
  {
    name: 'side_chick_02',
    lastReceived: '3m',
    receivedStatus: constants.TEXT_RECEIVED
  },
  {
    name: 'obama',
    lastReceived: '10m',
    receivedStatus: constants.TEXT_RECEIVED_SEEN
  }
]


var messagesDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
var messages = [

  ]