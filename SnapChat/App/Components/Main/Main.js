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

          <View style={styles.toolbar}>
              <Text style={styles.toolbarSide} onPress={() => this.handleFlashChange()}> {flashText} </Text>
              <Text style={styles.toolbarMiddle}>ME</Text>
              <Text style={styles.toolbarSide} onPress={() => this.handleCameraChange()}> {cameraText} </Text>
          </View>
          <Text
            style={styles.capture}
            onPress={this.takePicture.bind(this)}
          >
            CAPTURE
          </Text>
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
    toolbar:{
      backgroundColor:'rgba(0,0,0,0)',
      paddingTop:15,
      paddingBottom:10,
      flexDirection:'row'
  },
  toolbarSide:{
      width: 50,
      color:'#fff',
      textAlign:'center'
  },
  toolbarMiddle:{
      color:'#fff',
      textAlign:'center',
      flex:1
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
    margin: 40
  }
})

export default Main
