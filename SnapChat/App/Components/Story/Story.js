import React from 'react'
import { Text, View, ListView, TouchableHighlight } from 'react-native'
import {storyStyles as styles } from './StoryStyles'
import StoryRow from './StoryRow'

const Stories = ({stories}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Stories
      </Text>

      <Text style={styles.subheading}>
        RECENT UPDATES
      </Text>
      <ListView
        dataSource={stories}
        renderRow={createStoryRow}
      />
    </View>
  )
}

export default Stories


const createStoryRow = (storyObject, i) => {
  return (
    <StoryRow
      username={storyObject.username}
      postedTime={storyObject.posted}
      key={i}
    />
  )
}
