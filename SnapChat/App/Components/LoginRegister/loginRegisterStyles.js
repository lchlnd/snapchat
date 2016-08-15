import { StyleSheet } from 'react-native'

export const loginRegisterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efce00'
  },
  logo: {
    marginTop: 250
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    letterSpacing: 1,
    alignSelf: 'stretch',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 28,
    fontFamily: 'Helvetica'
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 80,
    flexDirection: 'column',
    height: 80,
    alignItems: 'stretch'
  },
  loginButton: {
    height: 80,
    padding: 25,
    backgroundColor: '#e82754'
  },
  signupButton: {
    height: 80,
    padding: 25,
    backgroundColor: '#3cb2e2'
  }
})
