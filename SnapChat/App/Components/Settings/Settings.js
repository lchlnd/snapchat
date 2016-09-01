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

        {/*My Account Details*/}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>MY ACCOUNT</Text>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Name</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Username</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Birthday</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Mobile Number</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Email</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Bitmoji</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Password</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Login Verification</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Notifications</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Memories</Text>
                </TouchableHighlight>
            </View>
        </View>

        {/* Additional Services Details */}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>ADDITIONAL SERVICES</Text>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Manage</Text>
                </TouchableHighlight>
            </View>
        </View>

        {/* Who Can Details */}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>WHO CAN...</Text>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Contact me</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>View My Story</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>See me in Quick Add</Text>
                </TouchableHighlight>
            </View>
        </View>

        {/* More Information Details */}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>MORE INFORMATION</Text>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Support</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Privacy Policy</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Terms of Service</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Licenses</Text>
                </TouchableHighlight>
            </View>
        </View>

        {/* Account Actions Details */}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>ACCOUNT ACTIONS</Text>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Clear cache</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Clear Conversations</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Restore purchases</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Blocked</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.listField}>
                <TouchableHighlight>
                    <Text>Logout</Text>
                </TouchableHighlight>
            </View>
        </View>

    </View>

)

const func = PropTypes.func.isRequired

Settings.propTypes = {
    backButtonPressed: func
}

export default Settings
