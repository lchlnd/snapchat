import { StyleSheet } from 'react-native'

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  userRow: {
    padding: 10,
    fontSize: 20,
    flex: 1,
    flexDirection: 'row'
  },
  userRowInfo: {
    flexDirection: 'column'
  },
  heading: {
    backgroundColor: '#3cb2e2',
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  imageIcon: {
    width: 70
  }
})
