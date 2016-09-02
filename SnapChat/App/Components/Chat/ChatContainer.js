import React, {PropTypes} from 'react'
import Chat from './Chat'
import { chatStyles as styles } from './chatStyles'
import {ListView} from 'react-native'



var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

export default class ChatContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      dataSource: ds.cloneWithRows([])
    }
  }

  componentDidMount () {
    mockAPICall((err, res) => {
      console.log('res', res)
      if (err) return
      else {
        this.setState({
          dataSource: ds.cloneWithRows(res)
        })
      }
    })
  }

  render () {
    console.log(styles.container)

    return (<Chat friends={this.state.dataSource} />)
  }
}

ChatContainer.propTypes = {
}

export default ChatContainer

// mock data
import constants from '../../constants'

const mockAPICall = (cb) => {
  setTimeout(() => cb(null, friends), 300)
}

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
