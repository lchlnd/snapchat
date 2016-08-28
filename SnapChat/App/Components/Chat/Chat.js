import React, { PropTypes } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { chatStyles as styles } from './chatStyles'

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

const UserRow = ({username, lastRecieved, newImage}) => {
  return (
    <View style={styles.userRow}>
      <View style={styles.imageIcon}>
      {
        newImage === true
          ? <Text> new image</Text>
          : <Text> no new Image </Text>
      }
      </View>
      <View style={styles.userRowInfo}>
        <Text>{username}</Text>
        <Text>{lastRecieved}</Text>
      </View>
    </View>
  )
}

const createUserRow = (userObject, i) => {
  console.log(userObject)
  return (
    <UserRow
      key={i}
      username={userObject.name}
      lastRecieved={userObject.lastRecieved}
      newImage={userObject.newImage}
    />
  )
}

Chat.propTypes = {
  friends: PropTypes.array
}

export default Chat
