import React from 'react'
import {TouchableHighlight, Text, View, Image} from 'react-native'
import {storyStyles as styles} from './StoryStyles'

const StoryRow = ({username, postedTime}) => {
  return (
    <TouchableHighlight>
      <View style={styles.storyRow}>
        <View style={styles.storyIcon}>
          <Image source={require('../../../images/chat/cameraIconSmallChat.png')} style={styles.storyImage} />
        </View>

        <View>
          <Text style={styles.usernameHeading}>{username}</Text>
          <Text style={styles.agoSubHeading}>{postedTime} ago</Text>
        </View>
      </View>
    </TouchableHighlight>
  )
}

export default StoryRow
