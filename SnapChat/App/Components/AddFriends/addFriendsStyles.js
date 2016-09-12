import { StyleSheet } from 'react-native'

export const addFriendsStyles = StyleSheet.create({
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
  fieldInfo: {
    flexDirection: 'row',
    borderBottomColor: '#e8e8e8',
    borderBottomWidth: 1,
    padding: 15,
    marginLeft: 5
  },
  fieldTitle: {
    fontSize: 14,
    flex: 1,
    marginTop: 10,
    marginLeft: 10
  },
  addedMeImg: {
    height: 30,
    width: 30,
    marginRight: 20
  }
})
