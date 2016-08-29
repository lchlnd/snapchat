import { StyleSheet } from 'react-native'

export const chatStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  userRow: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgb(176, 174, 172)',
    borderBottomWidth: 0.23
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
  },
  lastRecieved: {
    fontSize: 10,
    paddingTop: 3
  }
})
