import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableHighlight } from 'react-native'
import Camera from 'react-native-camera'

// The root component container of the app that gets rendered after user has logged in
class Main extends Component {
  constructor (props) {
    super()
    this.state = {
      showProgress: false
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Camera ref={(cam) => {
          this.camera = cam
        }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    )
  }

  takePicture () {
    this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.log(err))
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
})

export default Main
