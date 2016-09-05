import React, { Component } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableHighlight } from 'react-native'
import Camera from 'react-native-camera'

// The root component container of the app that gets rendered after user has logged in
class Main extends Component {
  constructor (props) {
    super()
    this.state = {
      showProgress: false,
      frontCamera: false,
      flash: 'auto'
    }
    this.handleCameraChange = this.handleCameraChange.bind(this);
    this.handleFlashChange = this.handleFlashChange.bind(this);
  }

  handleCameraChange() {
    this.setState({ frontCamera: !this.state.frontCamera})
  }

  handleFlashChange() {
    var lookup = {"auto":"on", "on":"off", "off":"auto"}
    this.setState({ flash: lookup[this.state.flash]})
  }

  render () {
    const cameraText = this.state.frontCamera ? 'front' : 'back';
    const flashText = this.state.flash
    return (
      <View style={styles.container}>
        <Camera ref={(cam) => {
          this.camera = cam
        }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={this.state.frontCamera ? Camera.constants.Type.front : Camera.constants.Type.back}
          flashMode={this.state.flash == "auto" ? Camera.constants.FlashMode.auto :
                    (this.state.flash == "on" ? Camera.constants.FlashMode.on : Camera.constants.FlashMode.off)}>

          <View style={styles.header}>
              <TouchableHighlight onPress={() => this.handleFlashChange()}>
               <Text style={styles.headerButton} > {flashText} </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.flex}>
                <Text style={styles.headerMiddle}> / ME / </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={() => this.handleCameraChange()}>
                <Text style={styles.headerButton} > {cameraText} </Text>
              </TouchableHighlight>
          </View>
          <View style={styles.footer}>
            <TouchableHighlight onPress={this.takePicture.bind(this)}>
              <Text style={styles.capture}> CAPTURE </Text>
            </TouchableHighlight>
            <View style={styles.header}>
              <TouchableHighlight>
               <Text style={styles.headerButton} > / S / </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.flex}>
                <Text style={styles.headerMiddle}> / M / </Text>
              </TouchableHighlight>
              <TouchableHighlight>
                <Text style={styles.headerButton} > / St / </Text>
              </TouchableHighlight>
              </View>
          </View>
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
  header: {
    marginTop: 30,
    paddingBottom:10,
    flexDirection:'row'
  },
  headerButton: {
    color: 'white',
    fontSize: 16,
    width: 40,
    height: 30
  },
  headerMiddle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    flex: 1
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  flex: {
    flex: 1
  },
  preview: {
    flex: 1,
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
    margin: 40,
    textAlign: 'center'
  }
})

export default Main
