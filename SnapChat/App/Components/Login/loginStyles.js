import { StyleSheet } from 'react-native'

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginTop: 30
  },
  backArrow: {
    height: 25,
    width: 25,
    marginLeft: 10,
    marginTop: 10
  },
  loginHeaderWrapper: {
    marginTop: 30,
    alignSelf: 'center'
  },
  loginHeader: {
    fontWeight: 'bold',
    color: '#212121',
    fontSize: 20
  },
  formContainer: {
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  formInput: {
    marginTop: 3,
    height: 40,
    borderColor: 'silver',
    borderWidth: 1
  }
})
