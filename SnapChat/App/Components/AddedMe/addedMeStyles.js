import { StyleSheet } from 'react-native'

export const addedMeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    marginTop: 30,
    paddingBottom: 10,
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1
  },
  backArrow: {
    width: 30,
    height: 30
  },
  headerTitle: {
    color: '#944E9C',
    fontSize: 22,
    textAlign: 'center',
    flex: 1
  },
  userRowInfo: {
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    padding: 15,
    marginLeft: 5
  },
  userNameField: {
    flexDirection: 'column',
    marginLeft: 25
  },
  addedMeImg: {
    width: 40,
    height: 40
  },
  username: {
    fontSize: 16,
    paddingBottom: 5
  },
  method: {
    fontSize: 10
  }
})
