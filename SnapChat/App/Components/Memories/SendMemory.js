import React, { Component, PropTypes } from 'react'
import { Image, View } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'

class SendMemory extends Component {
  constructor (props) {
    super(props)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return (
      <View style={styles.selectedImageContainer}>
        <Image style={styles.selectedImage} source={{uri: this.props.uri}} />
      </View>
    )
  }
}

SendMemory.propTypes = {
  navigator: PropTypes.object,
  uri: PropTypes.string
}

export default SendMemory
