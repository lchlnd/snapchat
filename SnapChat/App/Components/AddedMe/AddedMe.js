import React from 'react'
import { View, Text } from 'react-native'
import { addedMeStyles as styles } from './addedMeStyles'

const AddedMe = () => (

    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Added me</Text>
        </View>

    </View>

)

export default AddedMe
