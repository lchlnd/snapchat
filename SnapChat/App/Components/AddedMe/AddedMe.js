import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native'
import { addedMeStyles as styles } from './addedMeStyles'

const AddedMe = ({backButtonPressed, addedMeData}) => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableHighlight onPress={backButtonPressed} underlayColor='#F5F5F5'>
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
      </TouchableHighlight>
      <Text style={styles.headerTitle}>
        Added me
      </Text>
      <Text style={styles.backArrow} />
    </View>
    <ScrollView>
      {addedMeData.map((e, i) => createUserRow(e, i))}
    </ScrollView>
  </View>
)

const UserRow = ({username, method}) => {
  return (
    <View style={styles.userRowInfo}>
      <Image style={styles.addedMeImg} source={require('../../../images/added_me.png')} />
      <View style={styles.userNameField}>
        <Text style={styles.username}>
          {username}
        </Text>
        <Text style={styles.method}>
          {method}
        </Text>
      </View>
    </View>
  )
}

const createUserRow = (userObject, i) => {
  return (
    <UserRow key={i} username={userObject.username} method={userObject.method} />
  )
}

const func = PropTypes.func.isRequired

AddedMe.propTypes = {
  backButtonPressed: func,
  addedMeData: PropTypes.array
}

export default AddedMe
