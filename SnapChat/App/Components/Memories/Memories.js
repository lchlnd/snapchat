import React from 'react'
import { View, Text } from 'react-native'
import { memoriesStyles as styles } from './memoriesStyles'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'

const Memories = () => (
  <View style={styles.container}>
    <View>
      <Text>Memories</Text>
    </View>
    <ScrollableTabView renderTabBar={() => <DefaultTabBar />}>
      <Text tabLabel='Snaps'>save some snaps and stories to get started</Text>
      <Text tabLabel='Camera Roll'>Camera roll component</Text>
    </ScrollableTabView>
  </View>
)

export default Memories
