import React, {PropTypes} from 'react'
import Chat from './Chat'
import { chatStyles as styles } from './chatStyles'
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
    messages.push({message:`messages for ${username}`})
    this.props.navigator.push({
      title:'Chat w'+username,
      component:ChatToUser,
      passProps:{
        username: username,
        messages: messagesDataSource.cloneWithRows(messages),
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
    imageStatus: constants.IMAGE_RECIEVED_STATUS
  },
  {
    name: 'ryan',
    lastReceived: '16h',
    imageStatus: constants.IMAGE_SENT_STATUS
  },
  {
    name: 'nathan',
    lastReceived: '10m',
    imageStatus: constants.IMAGE_RECIEVED_STATUS
  },
  {
    name: 'tim',
    lastReceived: '30m',
    imageStatus: constants.IMAGE_SENT_STATUS
  },
  {
    name: 'remdogga',
    lastReceived: 'just now',
    imageStatus: constants.IMAGE_OPENED_STATUS
  }
]


var messagesDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
var messages = [
    {
      message:'hello world'
    },
    {
      message:'second'
    },{message:'third'},{message:'tom you are a sick cunt'}
  ]