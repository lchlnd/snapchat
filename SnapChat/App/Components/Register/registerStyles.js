import { StyleSheet } from 'react-native'

export const registerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 30
  },
  registerHeaderWrapper: {
    marginTop: 30,
    alignSelf: 'center'
  },
  registerHeader: {
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
  },
  signupButtonContainer: {
    marginTop: 25,
    alignSelf: 'center'
  },
  signupButtonActivated: {
    height: 42,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  signupButtonActivatedText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  },
  signupButtonDeactivated: {
    height: 42,
    width: 200,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: 'silver'
  },
  signupButtonDeactivatedText: {
    alignSelf: 'center',
    color: 'gray',
    fontWeight: 'bold'
  }
})
