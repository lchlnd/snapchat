import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native'
import { addFriendsStyles as styles } from './addFriendsStyles'

const AddFriends = ({backButtonPressed}) => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableHighlight onPress={backButtonPressed} underlayColor='#F5F5F5'>
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
      </TouchableHighlight>
      <Text style={styles.headerTitle}>
        Add Friends
      </Text>
      <Text style={styles.backArrow} />
    </View>
    <ScrollView>
      <Row field='Add by Username' />
      <Row field='Add from Address Book' />
      <Row field='Add by Snapcode' />
      <Row field='Add Nearby' />
      <Row field='Share username' />
    </ScrollView>
  </View>
)

const Row = ({field}) => {
  return (
    <View style={styles.fieldInfo}>
      <Text style={styles.fieldTitle}>
        {field}
      </Text>
      <Image style={styles.addedMeImg} source={require('../../../images/forward_arrow.png')} />
    </View>
  )
}

const func = PropTypes.func.isRequired

AddFriends.propTypes = {
  backButtonPressed: func
}

export default AddFriends
