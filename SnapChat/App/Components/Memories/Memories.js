import React from 'react'
import { View, Text } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import CameraRollContainer from './CameraRollContainer'

const Memories = () => (
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
      <Text tabLabel={'Snaps'}>save some snaps and stories to get started</Text>
      <CameraRollContainer tabLabel={'Camera Roll'} />
    </ScrollableTabView>
  </View>
)

function renderTab () {
  return <DefaultTabBar underlineColor={'indianred'} underlineHeight={1.5} />
}

export default Memories
