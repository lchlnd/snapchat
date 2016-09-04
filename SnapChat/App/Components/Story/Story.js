import React from 'react'
import { Text, View } from 'react-native'
import {storyStyles as styles } from './StoryStyles'

const Stories = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Stories
      </Text>
    </View>
  )
}

export default Stories