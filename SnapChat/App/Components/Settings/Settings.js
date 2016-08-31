import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { settingsStyles as styles } from './settingsStyles'

const Settings = ({backButtonPressed}) => (

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
            <Text style={styles.headerTitle}>Settings</Text>
            <Text style={styles.backArrow}></Text>
        </View>

    </View>

)

const func = PropTypes.func.isRequired

Settings.propTypes = {
    backButtonPressed: func
}

export default Settings
