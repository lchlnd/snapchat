import React, { PropTypes } from 'react'
import { View, Text, TouchableHighlight, Image, ScrollView } from 'react-native'
import { settingsStyles as styles } from './settingsStyles'

const Settings = ({
  backButtonPressed,
  myAccountData,
  additionalServicesData,
  whoCanData,
  moreInformationData,
  accountActionsData
}) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <TouchableHighlight onPress={backButtonPressed} underlayColor='#F5F5F5'>
        <Image style={styles.backArrow} source={require('../../../images/back_arrow.png')} />
      </TouchableHighlight>
      <Text style={styles.headerTitle}>
        Settings
      </Text>
      <Text style={styles.backArrow} />
    </View>
    <ScrollView>
      <Text style={styles.sectionTitle}>
        MY ACCOUNT
      </Text>
      {myAccountData.map((e, i) => createSectionRow(e, i))}
      <Text style={styles.sectionTitle}>
        ADDITIONAL SERVICES
      </Text>
      {additionalServicesData.map((e, i) => createSectionRow(e, i))}
      <Text style={styles.sectionTitle}>
        WHO CAN..
      </Text>
      {whoCanData.map((e, i) => createSectionRow(e, i))}
      <Text style={styles.sectionTitle}>
        MORE INFORMATION
      </Text>
      {moreInformationData.map((e, i) => createSectionRow(e, i))}
      <Text style={styles.sectionTitle}>
        ACCOUNT ACTIONS
      </Text>
      {accountActionsData.map((e, i) => createSectionRow(e, i))}
    </ScrollView>
  </View>
)

const SectionRow = ({field}) => {
  return (
    <View style={styles.listField}>
      <TouchableHighlight>
        <Text>
          {field}
        </Text>
      </TouchableHighlight>
    </View>
  )
}

const createSectionRow = (settingsObject, i) => {
  return (
    <SectionRow key={i} field={settingsObject.field} />
  )
}

const func = PropTypes.func.isRequired

Settings.propTypes = {
  backButtonPressed: func,
  settingsData: PropTypes.array
}

export default Settings
