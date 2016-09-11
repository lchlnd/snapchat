import { StyleSheet } from 'react-native'

export const landingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3ea11',
    justifyContent: 'space-between'
  },
  logo: {
    marginTop: 160,
    height: 130,
    width: 130,
    alignSelf: 'center'
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
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  loginButton: {
    height: 80,
    padding: 25,
    backgroundColor: '#e82754',
    alignSelf: 'stretch'
  },
  signupButton: {
    height: 80,
    padding: 25,
    backgroundColor: '#3cb2e2'
  }
})
