import React, { PropTypes } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { chatStyles as styles } from './chatStyles'
import createUserRow from './UserRow'

const Chat = ({friends}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Chat
      </Text>
      <ScrollView>
        {friends.map((e, i) => createUserRow(e, i))}
      </ScrollView>
    </View>
    )
}

Chat.propTypes = {
  friends: PropTypes.array
}

export default Chat
