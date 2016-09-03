import React, {PropTypes} from 'react'
import { Text, View, TouchableHighlight, Image } from 'react-native'
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
      imageStatus={userObject.receivedStatus}
      openChat={openChat}
    />
  )
}



/// have to have images hardcorded... lmao
const imageStatusToDisplay = receivedStatus => {
  if (receivedStatus === constants.IMAGE_SENT) {
    return (
      <Image source={require(`../../../images/imageSent.png`)} style={styles.imageStatus} />
  )
  } else if (receivedStatus === constants.IMAGE_SENT_SEEN) {
    return (
      <Image source={require(`../../../images/imageSentSeen.png`)} style={styles.imageStatus} />
    )
  } else if (receivedStatus === constants.IMAGE_RECEIVED) {
    return (
      <Image source={require(`../../../images/imageReceived.png`)} style={styles.imageStatus} />
    )
  } else if(receivedStatus === constants.IMAGE_RECEIVED_SEEN){
    return (
      <Image source={require(`../../../images/imageReceivedSeen.png`)} style={styles.imageStatus} />
    )
  } else if(receivedStatus === constants.TEXT_RECEIVED){
    return (
      <Image source={require(`../../../images/textReceived.png`)} style={styles.imageStatus} />
    )
  } else if(receivedStatus === constants.TEXT_RECEIVED_SEEN){
    return (
      <Image source={require(`../../../images/textReceivedSeen.png`)} style={styles.imageStatus} />
    )
  }else if(receivedStatus === constants.TEXT_SENT){
    return (
      <Image source={require(`../../../images/textSent.png`)} style={styles.imageStatus} />
    )
  }else if(receivedStatus === constants.TEXT_SENT_SEEN){
    return (
      <Image source={require(`../../../images/textSentSeen.png`)} style={styles.imageStatus} />
    )
  }
}



export default renderUserRow
