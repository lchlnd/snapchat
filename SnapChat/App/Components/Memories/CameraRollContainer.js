import React, { Component, PropTypes } from 'react'
import { CameraRoll, ScrollView, View, Image, TouchableHighlight } from 'react-native'
import ManageMemory from './ManageMemory'
import { memoriesStyles as styles } from './memoriesStyles'

class CameraRollContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      images: [],
      imageSelected: ''
    }

    this.storeImages = this.storeImages.bind(this)
    this.logImageError = this.logImageError.bind(this)
    this.selectImage = this.selectImage.bind(this)
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

  selectImage (uri) {
    // this gets a base-64 version of the image. turns out its low quality though
    // NativeModules.ReadImageData.readImage(uri, (image) => {
    //   console.log(image)
    // })
    this.setState({
      selected: uri
    })
    this.props.navigator.push({
      component: ManageMemory,
      title: 'Manage Memory',
      passProps: { uri }
    })
  }

  render () {
    return (
      <ScrollView style={styles.imageRollContainer}>
        <View style={styles.imageRollImageGrid}>
          { this.state.images.map(image =>
            <TouchableHighlight
              key={image.uri}
              style={styles.cameraRollImageGrid}
              onPress={() => this.selectImage(image.uri)} >
              <Image style={styles.cameraRollImage} source={{ uri: image.uri }} />
            </TouchableHighlight>
            )
          }
        </View>
      </ScrollView>
    )
  }
}

CameraRollContainer.propTypes = {
  navigator: PropTypes.object.isRequired
}

export default CameraRollContainer
