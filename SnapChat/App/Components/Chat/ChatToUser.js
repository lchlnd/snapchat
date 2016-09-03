import React from 'react'
import { Text, View, TextInput, ListView } from 'react-native'
import { chatStyles as styles } from './chatStyles'

export default ChatToUser = ({username, messages, onBackPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.chatToUserToolBar}>
        <Text style={styles.chatToUserToolBarButton}>DropDown</Text>
        <Text style={styles.chatToUserToolBarTitle}>{username}</Text>
        <Text style={styles.chatToUserToolBarButton} onPress={()=>onBackPress()}>Back</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.messages}>
          <ListView
            dataSource={messages}
            renderRow={renderUserMessage}
          />
        </View>
        <TextInput
          style={styles.textInput}
        />
      </View>
    </View>
  )
}


const renderUserMessage = (userMessage, i) => {
  if(userMessage.from){
    return (
      <View>
        <Text style={styles.messageThem}>|
          <Text style={styles.messageNormal}> {userMessage.message}</Text>
        </Text>
      </View>
    )
  }else{
    return (
      <View>
        <Text style={styles.messageMe}>|
          <Text style={styles.messageNormal}> {userMessage.message}</Text>
        </Text>
      </View>
    )
  }
}