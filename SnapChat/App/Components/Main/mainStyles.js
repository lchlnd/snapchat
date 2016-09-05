import { StyleSheet, Dimensions } from 'react-native'

export const mainStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    marginTop: 30,
    paddingBottom:10,
    flexDirection:'row'
  },
  headerButton: {
    color: 'white',
    fontSize: 16,
    width: 40,
    height: 30
  },
  headerMiddle: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    flex: 1
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0
  },
  flex: {
    flex: 1
  },
  preview: {
    flex: 1,
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40,
    textAlign: 'center'
  }
})
