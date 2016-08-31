import React from 'react'
import { View, Text } from 'react-native'
import { myFriendsStyles as styles } from './myFriendsStyles'

const MyFriends = () => (

    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>My Friends</Text>
        </View>

    </View>

)

export default MyFriends
