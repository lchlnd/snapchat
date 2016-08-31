import React, { PropTypes } from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
import { meStyles as styles } from './meStyles'

const Me = ({
    addedMePressed,
    addFriendsPressed,
    myFriendsPressed,
    cameraBackPressed
    }) => (

    <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerButton}> / ? / </Text>
            <Text style={styles.headerMiddle}> / T / </Text>
            <Text style={styles.headerButton}> / S / </Text>
        </View>

        {/* Barcode Image */}
        <View style={styles.image}>
            <Image
                style={styles.barcodeImage}
                source={require('../../../images/barcodeImage.png')}
            />
            <Text style={styles.name}>Ryan O'Kane</Text>
            <Text style={styles.username}>ryanokane | 13,213</Text>
        </View>

        {/* Added Me Button */}
        <TouchableHighlight onPress={addedMePressed}>
            <View>
                <Text style={styles.buttonText}>
                    Added me
                </Text>
            </View>
        </TouchableHighlight>

        {/* Add Friends Button */}
        <TouchableHighlight onPress={addFriendsPressed}>
            <View>
                <Text style={styles.buttonText}>
                    Add Friends
                </Text>
            </View>
        </TouchableHighlight>

        {/* My Friends Button */}
        <TouchableHighlight onPress={myFriendsPressed}>
            <View>
                <Text style={styles.buttonText}>
                    My Friends
                </Text>
            </View>
        </TouchableHighlight>

        {/* Take Picture Button */}
        <TouchableHighlight onPress={cameraBackPressed}>
            <View style={styles.cameraButton}>
                <Text style={styles.buttonText}>
                    O
                </Text>
            </View>
        </TouchableHighlight>

    </View>

)

const func = PropTypes.func.isRequired

Me.propTypes = {
    addedMePressed: func,
    cameraBackPressed: func,
    myFriendsPressed: func,
    addFriendsPressed: func
}

export default Me
