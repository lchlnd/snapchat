import React, { PropTypes } from 'react'
import { Text, View, ListView } from 'react-native'
import { chatStyles as styles } from './chatStyles'
import renderUserRow from './UserRow'

const Chat = ({friends}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Chat
      </Text>
      <ListView
        dataSource={friends}
        renderRow={renderUserRow}
     />
    </View>
    )
}

Chat.propTypes = {
  friends: PropTypes.object
}

export default Chat
