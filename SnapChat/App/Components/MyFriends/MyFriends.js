import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { myFriendsStyles as styles } from './myFriendsStyles'

const MyFriends = ({backButtonPressed}) => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableHighlight onPress={backButtonPressed} underlayColor='#F5F5F5'>
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
      </TouchableHighlight>
      <Text style={styles.headerTitle}>
        My Friends
      </Text>
      <Text style={styles.backArrow}></Text>
    </View>
  </View>
)

const func = PropTypes.func.isRequired

MyFriends.propTypes = {
  backButtonPressed: func
}

export default MyFriends
