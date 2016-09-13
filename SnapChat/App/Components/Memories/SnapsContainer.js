import React, { Component, PropTypes } from 'react'
import { ScrollView, View, Image, TouchableHighlight } from 'react-native'
import SendSnaps from './SendSnaps'
import { memoriesStyles as styles } from './memoriesStyles'

class SnapsContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      savedImages: [
        'https://facebook.github.io/react/img/logo_og.png',
        'https://facebook.github.io/react/img/logo_og.png',
        'https://facebook.github.io/react/img/logo_og.png',
        'https://facebook.github.io/react/img/logo_og.png',
        'https://facebook.github.io/react/img/logo_og.png',
        'https://facebook.github.io/react/img/logo_og.png'
      ]
    }

    this.selectImage = this.selectImage.bind(this)
  }

  selectImage (image) {
    this.props.navigator.push({
      component: SendSnaps,
      title: 'Send snap',
      passProps: { image }
    })
  }

  render () {
    // get savedImages from API in future
    const savedImages = this.state.savedImages
    return (
      <ScrollView style={styles.imageRollContainer}>
        <View style={styles.imageRollImageGrid}>
          { savedImages.map((image, i) => {
            return (
              <TouchableHighlight
                onPress={() => this.selectImage(image)}
                key={i}
                style={styles.snapsImageGrid} >
                <Image style={styles.snapsRollImage} source={{ uri: image }} />
              </TouchableHighlight>
            )
          })
          }
        </View>
      </ScrollView>
    )
  }
}

SnapsContainer.propTypes = {
  navigator: PropTypes.object.isRequired
}

export default SnapsContainer
