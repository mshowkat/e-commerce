import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBEc2qZZWbpVN26N0vH3J2SyXAvC4xMZIk",
    authDomain: "botonix-87672.firebaseapp.com",
    databaseURL: "https://botonix-87672.firebaseio.com",
    projectId: "botonix-87672",
    storageBucket: "",
    messagingSenderId: "137277976047",
    appId: "1:137277976047:web:04d955f8bd196cf2"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


