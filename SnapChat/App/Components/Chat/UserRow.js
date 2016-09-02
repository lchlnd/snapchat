import React from 'react'
import { Text, View } from 'react-native'
import { chatStyles as styles } from './chatStyles'
import constants from '../../constants'

const UserRow = ({username, lastReceived, imageStatus}) => {
  return (
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
  )
}

const renderUserRow = (userObject, i) => {
  console.log(userObject)
  return (
    <UserRow
      key={i}
      username={userObject.name}
      lastReceived={userObject.lastReceived}
      imageStatus={userObject.imageStatus}
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

UserRow.propTypes = {

}

export default renderUserRow
