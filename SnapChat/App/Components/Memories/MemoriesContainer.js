import React, { Component, PropTypes } from 'react'
import Memories from './Memories'

class MemoriesContainer extends Component {
  constructor (props) {
    super(props)
    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <Memories
        navigator={this.props.navigator}
        backButtonPressed={this.backButtonPressed} />
    )
  }
}

MemoriesContainer.propTypes = {
  navigator: PropTypes.object
}

export default MemoriesContainer
