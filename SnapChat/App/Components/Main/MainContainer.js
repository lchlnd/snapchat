import React, { Component, PropTypes } from 'react'
import Camera from 'react-native-camera'
import Main from './Main'
import MeContainer from '../Me/MeContainer'
import StoriesContainer from '../Stories/StoriesContainer'

// Constant value to cycle flash modes.
var FLASH_LOOKUP = {"auto":"on", "on":"off", "off":"auto"}

class MainContainer extends Component {
  constructor (props) {
    super(props)
    this.state = {
      frontCamera: false,
      flash: 'auto'
    }

    this.mePressed = this.mePressed.bind(this)
    this.storiesPressed = this.storiesPressed.bind(this)
    this.cameraTogglePressed = this.cameraTogglePressed.bind(this)
    this.flashTogglePressed = this.flashTogglePressed.bind(this)
    this.takePicture = this.takePicture.bind(this)
  }

  mePressed() {
    this.props.navigator.push({
        title: 'MeContainer',
        component: MeContainer
    })
  }

  storiesPressed() {
    this.props.navigator.push({
        title: 'StoriesContainer',
        component: StoriesContainer
    })
  }

  cameraTogglePressed() {
    this.setState({ frontCamera: !this.state.frontCamera})
  }

  flashTogglePressed() {
    this.setState({ flash: FLASH_LOOKUP[this.state.flash]})
  }

  // Saves user photo to the camera roll.
  takePicture () {
    this.camera.capture()
    .then((data) => console.log(data))
    .catch(err => console.log(err))
  }

  render () {
  return <Main
    mePressed={this.mePressed}
    storiesPressed={this.storiesPressed}
    cameraTogglePressed={this.cameraTogglePressed}
    flashTogglePressed={this.flashTogglePressed}
    cameraText={this.state.frontCamera ? "front" : "back"}
    flashText={this.state.flash}
    takePicture={this.takePicture}
    />
  }
}

MainContainer.propTypes = {
    navigator: PropTypes.object
}

export default MainContainer

// import React, { Component } from 'react'
// import { Text, View, Dimensions, StyleSheet, TouchableHighlight } from 'react-native'
// import Camera from 'react-native-camera'
// import { mainStyles as styles } from './mainStyles'
//
// // Constant value to cycle flash modes.
// var FLASH_LOOKUP = {"auto":"on", "on":"off", "off":"auto"}
//
// // The root component container of the app that gets rendered after user has logged in
// class Main extends Component {
//   constructor (props) {
//     super()
//     this.state = {
//       frontCamera: false,
//       flash: 'auto'
//     }
//     this.handleCameraChange = this.handleCameraChange.bind(this);
//     this.handleFlashChange = this.handleFlashChange.bind(this);
//   }
//
//   // Handle swaps between front and back camera.
//   handleCameraChange() {
//     this.setState({ frontCamera: !this.state.frontCamera})
//   }
//
//
//   // Handle swaps between flash modes.
//   handleFlashChange() {
//     this.setState({ flash: FLASH_LOOKUP[this.state.flash]})
//   }
//
//   // Saves user photo to the camera roll.
//   takePicture () {
//     this.camera.capture()
//     .then((data) => console.log(data))
//     .catch(err => console.log(err))
//   }
//
//   render () {
//     // Updates to reflect user changes to the toggle buttons.
//     // const cameraText = this.state.frontCamera ? 'front' : 'back';
//     // const flashText = this.state.flash
//
//
//     return (
//
      // <View style={styles.container}>
      //
      //   {/* Main view must be camera to allow for it to take up entire screen. */}
      //   <Camera ref={(cam) => {this.camera = cam }}
      //     style={styles.preview}
      //     aspect={Camera.constants.Aspect.fill}
      //     type={this.state.frontCamera ? Camera.constants.Type.front : Camera.constants.Type.back}
      //     flashMode={this.state.flash == "auto" ? Camera.constants.FlashMode.auto :
      //               (this.state.flash == "on" ? Camera.constants.FlashMode.on : Camera.constants.FlashMode.off)}>
      //
      //     {/* Header */}
      //     <View style={styles.header}>
      //         <TouchableHighlight onPress={() => this.handleFlashChange()}>
      //          {/* <Text style={styles.headerButton} > {flashText} </Text> */}
      //          <Text style={styles.headerButton} > flash </Text>
      //         </TouchableHighlight>
      //         <TouchableHighlight style={styles.flex}>
      //           <Text style={styles.headerMiddle}> / ME / </Text>
      //         </TouchableHighlight>
      //         <TouchableHighlight onPress={() => this.handleCameraChange()}>
      //           {/* <Text style={styles.headerButton} > {cameraText} </Text> */}
      //           <Text style={styles.headerButton} > cam </Text>
      //         </TouchableHighlight>
      //     </View>
      //
      //     {/* Footer, including capture */}
      //     <View style={styles.footer}>
      //
      //       {/* Capture */}
      //       <TouchableHighlight onPress={this.takePicture.bind(this)}>
      //         <Text style={styles.capture}> CAPTURE </Text>
      //       </TouchableHighlight>
      //
      //       {/* Button navigation */}
      //       <View style={styles.header}>
      //         <TouchableHighlight>
      //          <Text style={styles.headerButton} > / S / </Text>
      //         </TouchableHighlight>
      //         <TouchableHighlight style={styles.flex}>
      //           <Text style={styles.headerMiddle}> / M / </Text>
      //         </TouchableHighlight>
      //         <TouchableHighlight>
      //           <Text style={styles.headerButton} > / St / </Text>
      //         </TouchableHighlight>
      //       </View>
      //     </View>
      //   </Camera>
      // </View>
//     )
//   }
// }
//
// export default Main
