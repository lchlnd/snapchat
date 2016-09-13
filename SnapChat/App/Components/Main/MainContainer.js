import React, { Component, PropTypes } from 'react'
import Main from './Main'
import MeContainer from '../Me/MeContainer'
import StoriesContainer from '../Story/StoryContainer'
import ChatContainer from '../Chat/ChatContainer'
import MemoriesContainer from '../Memories/MemoriesContainer'
import EditContainer from '../Edit/EditContainer'

// Constant value to cycle flash modes.
var FLASH_LOOKUP = {'auto': 'on', 'on': 'off', 'off': 'auto'}

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      frontCamera: false,
      flash: 'auto'
    }

    this.mePressed = this.mePressed.bind(this)
    this.storiesPressed = this.storiesPressed.bind(this)
    this.chatPressed = this.chatPressed.bind(this)
    this.memoriesPressed = this.memoriesPressed.bind(this)
    this.cameraTogglePressed = this.cameraTogglePressed.bind(this)
    this.flashTogglePressed = this.flashTogglePressed.bind(this)
    this.takePicture = this.takePicture.bind(this)
  }

  mePressed () {
    this.props.navigator.push({
      title: 'MeContainer',
      component: MeContainer
    })
  }

  storiesPressed () {
    this.props.navigator.push({
      title: 'StoriesContainer',
      component: StoriesContainer
    })
  }

  chatPressed () {
    this.props.navigator.push({
      title: 'ChatContainer',
      component: ChatContainer
    })
  }

  memoriesPressed () {
    this.props.navigator.push({
      title: 'MemoriesContainer',
      component: MemoriesContainer
    })
  }

  cameraTogglePressed () {
    this.setState({
      frontCamera: !this.state.frontCamera
    })
  }

  flashTogglePressed () {
    this.setState({
      flash: FLASH_LOOKUP[this.state.flash]
    })
  }

  // Saves user photo to the camera roll.
  takePicture () {
    // cam.capture()
    // .then((data) => console.log(data))
    // .catch(err => console.log(err))
    this.props.navigator.replace({
      title: 'EditContainer',
      component: EditContainer
    })
  }

  render () {
    return <Main
      mePressed={this.mePressed}
      storiesPressed={this.storiesPressed}
      chatPressed={this.chatPressed}
      memoriesPressed={this.memoriesPressed}
      cameraTogglePressed={this.cameraTogglePressed}
      flashTogglePressed={this.flashTogglePressed}
      cameraText={this.state.frontCamera ? 'front' : 'back'}
      flashText={this.state.flash}
      takePicture={this.takePicture}
    />
  }
}

MainContainer.propTypes = {
  navigator: PropTypes.object
}

export default MainContainer
