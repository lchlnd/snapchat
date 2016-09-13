import React, { Component, PropTypes } from 'react'
import { Image, View, TouchableHighlight } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'

class SendMemory extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  // TODO: add methods to delete, send and upload images

  render () {
    return (
      <View style={styles.selectedImageContainer}>
        <View style={styles.backArrowContainer}>
          <TouchableHighlight onPress={this.backButtonPressed}>
            <Image
              style={styles.backArrow}
              source={require('../../../images/back_arrow_white.png')} />
          </TouchableHighlight>
        </View>

        <Image style={styles.selectedImage} source={{uri: this.props.uri}} />

        <View style={styles.selectedImageFooter}>
          <View style={styles.footerMenu}>
            <View style={styles.utilIcons}>
              <Image style={styles.icon} source={require('../../../images/trash.png')} />
              <Image style={styles.icon} source={require('../../../images/upload.png')} />
            </View>

            <Image style={styles.sendIcon} source={require('../../../images/send.png')} />
          </View>
        </View>

      </View>
    )
  }
}

SendMemory.propTypes = {
  navigator: PropTypes.object,
  uri: PropTypes.string
}

export default SendMemory
