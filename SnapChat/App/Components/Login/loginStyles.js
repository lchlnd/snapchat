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
  // FORM
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
  },
  // LOGIN BUTTON
  loginButtonContainer: {
    marginTop: 25,
    alignSelf: 'center'
  },
  loginButtonActivated: {
    height: 42,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  loginButtonActivatedText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  loginButtonDeactivated: {
    height: 42,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'silver'
  },
  loginButtonDeactivatedText: {
    alignSelf: 'center',
    color: 'gray',
    fontWeight: 'bold'
  },
  errorMessage: {
    color: 'indianred',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10
  }
})
