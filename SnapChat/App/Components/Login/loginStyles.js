import { StyleSheet } from 'react-native'

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 30
  },
  backArrow: {
    height: 35,
    width: 35,
    marginLeft: 10,
    marginTop: 10
  },
  loginHeaderWrapper: {
    marginTop: 30,
    alignSelf: 'center'
  },
  loginHeader: {
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 20
  },
  formContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  inputLabel: {
    color: '#757575',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 12
  },
  formInput: {
    marginTop: 3,
    height: 40,
    borderColor: 'silver',
    borderWidth: 1
  }
})
