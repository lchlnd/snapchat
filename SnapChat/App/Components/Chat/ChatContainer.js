import React, {PropTypes} from 'react'
import Chat from './Chat'
import { chatStyles as styles } from './chatStyles'

export default class ChatContainer extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(styles.container)

    return (<Chat friends={friends} />)
  }
}

ChatContainer.propTypes = {
}

export default ChatContainer

// mock data
import constants from '../../constants'
const friends = [
  {
    name: 'lachlan',
    lastRecieved: '5m',
    imageStatus: constants.IMAGE_RECIEVED_STATUS
  },
  {
    name: 'ryan',
    lastRecieved: '16h',
    imageStatus: constants.IMAGE_SENT_STATUS
  },
  {
    name: 'nathan',
    lastRecieved: '10m',
    imageStatus: constants.IMAGE_RECIEVED_STATUS
  },
  {
    name: 'tim',
    lastRecieved: '30m',
    imageStatus: constants.IMAGE_SENT_STATUS
  },
  {
    name: 'remdogga',
    lastRecieved: 'just now',
    imageStatus: constants.IMAGE_OPENED_STATUS
  }
]
