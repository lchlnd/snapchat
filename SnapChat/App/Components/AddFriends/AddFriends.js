import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { addFriendsStyles as styles } from './addFriendsStyles'

const AddFriends = ({backButtonPressed}) => (

    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
            <TouchableHighlight
                onPress={backButtonPressed}
                underlayColor="#F5F5F5">
                <Image
                    style={styles.backArrow}
                    source={require('../../../images/back_arrow.png')}
                />
            </TouchableHighlight>
            <Text style={styles.headerTitle}>Add Friends</Text>
            <Text style={styles.backArrow}></Text>
        </View>

    </View>

)

const func = PropTypes.func.isRequired

AddFriends.propTypes = {
    backButtonPressed: func
}

export default AddFriends
