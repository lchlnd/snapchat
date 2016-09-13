import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import CameraRollContainer from './CameraRollContainer'
import SnapsContainer from './SnapsContainer'

const Memories = ({ navigator }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.title}>Memories</Text>
    </View>
    <ScrollableTabView
      renderTabBar={renderTab}
      tabBarTextStyle={{fontSize: 13}}
      tabBarActiveTextColor='indianred'
      tabBarInactiveTextColor='gray'
    >
      {/* Snaps container lists all your saved memories (photos you've taken) and adds to ability to resend */}
      <SnapsContainer navigator={navigator} tabLabel={'Snaps'} />
      {/* Lets you look through camera roll to send ppl snaps, upload or delete */}
      <CameraRollContainer navigator={navigator} tabLabel={'Camera Roll'} />
    </ScrollableTabView>
  </View>
)

function renderTab () {
  return <DefaultTabBar underlineColor={'indianred'} underlineHeight={1.5} />
}

Memories.propTypes = {
  navigator: PropTypes.object.isRequired
}

export default Memories
