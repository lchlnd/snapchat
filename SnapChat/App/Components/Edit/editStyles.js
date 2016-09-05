import { StyleSheet } from 'react-native'

export const editStyles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  header: {
    marginTop: 30,
    paddingBottom:10,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  headerButton: {
    color: 'white',
    fontSize: 16,
    width: 40,
    height: 30
  },
  flex: {
    flex: 1,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  triple: {
    flex: 2,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  }
})
