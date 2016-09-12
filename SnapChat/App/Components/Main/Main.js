import React, { Component, PropTypes } from 'react'
import { Text, View, Dimensions, StyleSheet, TouchableHighlight } from 'react-native'
import Camera from 'react-native-camera'
import { mainStyles as styles } from './mainStyles'



const Main = ({
  mePressed,
  storiesPressed,
  cameraTogglePressed,
  flashTogglePressed,
  cameraText,
  flashText,
  takePicture
  }) => (

      <View style={styles.container}>

        {/* Main view must be camera to allow for it to take up entire screen. */}
        <Camera ref={(cam) => {this.camera = cam }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type={cameraText == "front" ? Camera.constants.Type.front : Camera.constants.Type.back}
          flashMode={flashText == "auto" ? Camera.constants.FlashMode.auto :
                    (flashText == "on" ? Camera.constants.FlashMode.on : Camera.constants.FlashMode.off)}>
          {/* Header */}
          <View style={styles.header}>
              <TouchableHighlight onPress={flashTogglePressed}>
               <Text style={styles.headerButton} > {flashText} </Text>
              </TouchableHighlight>
              <TouchableHighlight style={styles.flex} onPress={mePressed}>
                <Text style={styles.headerMiddle}> / ME / </Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={cameraTogglePressed}>
                <Text style={styles.headerButton} > {cameraText} </Text>
              </TouchableHighlight>
          </View>

          {/* Footer, including capture */}
          <View style={styles.footer}>

            {/* Capture */}
            <TouchableHighlight onPress={takePicture}>
              <Text style={styles.capture}> CAPTURE </Text>
            </TouchableHighlight>

            {/* Button navigation */}
            <View style={styles.header}>
              <TouchableHighlight onPress={storiesPressed}>
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

Main.propTypes = {
    mePressed: PropTypes.func.isRequired,
    storiesPressed: PropTypes.func.isRequired,
    cameraTogglePressed: PropTypes.func.isRequired,
    flashTogglePressed: PropTypes.func.isRequired,
    cameraText: PropTypes.string.isRequired,
    flashText: PropTypes.string.isRequired,
    takePicture: PropTypes.func.isRequired
}

export default Main
