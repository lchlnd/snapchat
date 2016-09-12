import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import CameraRollContainer from './CameraRollContainer'

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
      <Text tabLabel={'Snaps'}>save some snaps and stories to get started (dunno whats sposed to go in here</Text>
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
