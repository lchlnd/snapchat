import React from 'react'
import { View, Text } from 'react-native'
import { addFriendsStyles as styles } from './addFriendsStyles'

const AddFriends = () => (

    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Add Friends</Text>
        </View>

    </View>

)

export default AddFriends
