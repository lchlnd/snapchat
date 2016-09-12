import React from 'react'
import { Text, View, TextInput, ListView, Image } from 'react-native'
import { chatToUserStyles as styles } from './chatStyles'

export default ChatToUser = ({username, messages, onBackPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatToUserToolBar}>
        <Text style={styles.chatToUserToolBarButton}>DropDown</Text>
        <Text style={styles.chatToUserToolBarTitle}>{username}</Text>
        <Text style={styles.chatToUserToolBarButton} onPress={() => onBackPress()}>Back</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.messages}>
          <ListView
            dataSource={messages}
            renderRow={renderUserMessage}
          />
        </View>
        <View>
          <View style={styles.textInputBorder}>
            <TextInput style={styles.textInput} placeholder='Send a chat' selectionColor='#F0030A' />
          </View>
          <View style={styles.sendToolBar}>
          <Image source={require(`../../../images/chat/gallery.png`)} style={styles.toolBarImage} />
            <Image source={require(`../../../images/chat/phone.png`)} style={styles.toolBarImage} />
            <Image source={require(`../../../images/chat/cameraIconSmallChat.png`)} style={styles.toolBarImage} />
            <Image source={require(`../../../images/chat/video.png`)} style={styles.toolBarImage} />
            <Image source={require(`../../../images/chat/emoticonFace.png`)} style={styles.toolBarImage} />
          </View>
        </View>
      </View>
    </View>
  )
}

const renderUserMessage = (userMessage, i) => {
  if (userMessage.from) {
    return (
      <View>
        <Text style={styles.messageThem}>|
          <Text style={styles.messageNormal}> {userMessage.message}</Text>
        </Text>
      </View>
    )
  } else{
    return (
      <View>
        <Text style={styles.messageMe}>|
          <Text style={styles.messageNormal}> {userMessage.message}</Text>
        </Text>
      </View>
    )
  }
}
