export const openChat = (username, navigator) => {
  navigator.push({
    title:'Chat w'+{username},
    component:ChatToUser,
    passProps:{
      username: username,
      messages: messagesDataSource.cloneWithRows(messages)
    }
  })
}

