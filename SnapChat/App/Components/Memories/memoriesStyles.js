import { StyleSheet } from 'react-native'

export const memoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'indianred',
    fontSize: 18
  },
  tabStyle: {
    backgroundColor: 'indianred',
    width: 80
  },
  cameraRollContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  cameraRollImageGrid: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  cameraRollImage: {
    width: 100,
    height: 100,
    margin: 10,
  }
})
