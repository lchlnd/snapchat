import React, { Component } from 'react'
import { CameraRoll, ScrollView, View, Image } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'

class CameraRollContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      images: []
    }

    this.storeImages = this.storeImages.bind(this)
    this.logImageError = this.logImageError.bind(this)
  }

  componentDidMount () {
    CameraRoll.getPhotos({first: 25})
      .done(this.storeImages, this.logImageError)
  }

  storeImages (data) {
    const assets = data.edges
    const images = assets.map(asset => asset.node.image)
    this.setState({ images: images })
  }

  logImageError (err) {
    console.log(err)
  }

  render () {
    return (
      <ScrollView style={styles.cameraRollContainer}>
        <View style={styles.cameraRollImageGrid}>
          { this.state.images.map(image => <Image key={image.uri} style={styles.cameraRollImage} source={{ uri: image.uri }} />) }
        </View>
      </ScrollView>
    )
  }
}

export default CameraRollContainer
