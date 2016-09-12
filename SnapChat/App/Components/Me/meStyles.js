import { StyleSheet } from 'react-native'

export const meStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f0f0f'
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
    alignSelf: 'stretch',
    fontWeight: 'bold',
    padding: 10
  },
  header: {
    marginTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  image: {
    padding: 20
  },
  barcodeImage: {
    alignSelf: 'center',
    width: 150,
    height: 150
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
    color: 'white'
  },
  username: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
    paddingBottom: 20
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
  flex: {
    flex: 1
  },
  cameraButton: {

  }
})
