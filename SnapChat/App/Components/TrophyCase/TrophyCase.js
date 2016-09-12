import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image } from 'react-native'
import { trophyCaseStyles as styles } from './trophyCaseStyles'

const TrophyCase = ({backButtonPressed}) => (
  <View style={styles.container}>
    {/* Header */}
    <View style={styles.header}>
      <TouchableHighlight onPress={backButtonPressed} underlayColor='#F5F5F5'>
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
      </TouchableHighlight>
      <Text style={styles.headerTitle}>
        Trophy Case
      </Text>
      <Text style={styles.backArrow} />
    </View>
  </View>
)

const func = PropTypes.func.isRequired

TrophyCase.propTypes = {
  backButtonPressed: func
}

export default TrophyCase
