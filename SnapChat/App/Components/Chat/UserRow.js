import React, {PropTypes} from 'react'
import { Text, View, TouchableHighlight } from 'react-native'
import { chatStyles as styles, touchColor } from './chatStyles'
import constants from '../../constants'

const UserRow = ({username, lastReceived, imageStatus, openChat}) => {
  return (
    <TouchableHighlight
      underlayColor={touchColor}
      onPress={()=>openChat(username)}
    >
      <View style={styles.userRow}>
        <View style={styles.imageIcon}>
        {
          imageStatusToDisplay(imageStatus)
        }
        </View>
        <View style={styles.userRowInfo}>
          <Text>{username}</Text>
          <Text style={styles.lastReceived}>Last received: {lastReceived}</Text>
        </View>
      </View>
      </TouchableHighlight>
  )
}

const renderUserRow = (userObject, i, openChat) => {
  console.log(userObject)
  return (
    <UserRow
      key={i}
      username={userObject.name}
      lastReceived={userObject.lastReceived}
      imageStatus={userObject.imageStatus}
      openChat={openChat}
    />
  )
}

const imageStatusToDisplay = (imageStatus) => {
  if (imageStatus === constants.IMAGE_SENT_STATUS) {
    return (
      <Text>{constants.IMAGE_SENT_STATUS} picture</Text>
    )
  } else if (imageStatus === constants.IMAGE_RECIEVED_STATUS) {
    return (
      <Text>{constants.IMAGE_RECIEVED_STATUS} picture</Text>
    )
  } else {
    return (
      <Text>{constants.IMAGE_OPENED_STATUS} picture </Text>
    )
  }
}




export default renderUserRow
