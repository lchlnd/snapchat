import * as firebase from 'firebase'

// returns a promise
export const login = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password)

