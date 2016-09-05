import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, Image, View, TouchableHighlight } from 'react-native';
import { editStyles as styles } from './editStyles'

class Edit extends Component {
  constructor (props) {
    super()
  }
  render() {
    return (
      // Render the image here.
      <Image source={require('../../../images/testpic.jpg')} style={styles.container}>

        {/* Top Navigation */}
        <View style={styles.header}>
          {/* Back button */}
          <View style={styles.flex}>
            <TouchableHighlight>
             <Text style={styles.headerButton} > / B / </Text>
            </TouchableHighlight>
          </View>
          <View style={styles.flex}></View>

          {/* Editing buttons */}
          <View style={styles.triple}>
            {/* Add sticker */}
            <TouchableHighlight>
             <Text style={styles.headerButton} > / S / </Text>
            </TouchableHighlight>

            {/* Add text */}
            <TouchableHighlight>
             <Text style={styles.headerButton} > / T / </Text>
            </TouchableHighlight>

            {/* Draw */}
            <TouchableHighlight>
             <Text style={styles.headerButton} > / D / </Text>
            </TouchableHighlight>
          </View>
        </View>

        {/* Bottom navigation */}
        <View style={styles.footer}>
          {/* Top Navigation */}
          <View style={styles.header}>
            {/* Editing buttons */}
            <View style={styles.triple}>
              {/* Change time */}
              <TouchableHighlight>
               <Text style={styles.headerButton} > / T / </Text>
              </TouchableHighlight>

              {/* Save snap */}
              <TouchableHighlight>
               <Text style={styles.headerButton} > / S / </Text>
              </TouchableHighlight>

              {/* Add to story */}
              <TouchableHighlight>
               <Text style={styles.headerButton} > / S / </Text>
              </TouchableHighlight>
            </View>

            {/* Send */}
            <View style={styles.flex}></View>
            <View>
              <TouchableHighlight>
               <Text style={styles.headerButton} > / S / </Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Image>
    );
  }
}

export default Edit
