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
const friends = [
  {
    name: 'lachlan',
    lastRecieved: '5m',
    newImage: true
  },
  {
    name: 'ryan',
    lastRecieved: '16h',
    newImage: false
  },
  {
    name: 'nathan',
    lastRecieved: '10m',
    newImage: false
  },
  {
    name: 'tim',
    lastRecieved: '30m',
    newImage: true
  },
  {
    name: 'remdogga',
    lastRecieved: 'just now',
    newImage: false
  }
]
