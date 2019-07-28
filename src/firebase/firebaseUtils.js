import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import { async } from 'q';

const config = {
    apiKey: "AIzaSyBEc2qZZWbpVN26N0vH3J2SyXAvC4xMZIk",
    authDomain: "botonix-87672.firebaseapp.com",
    databaseURL: "https://botonix-87672.firebaseio.com",
    projectId: "botonix-87672",
    storageBucket: "",
    messagingSenderId: "137277976047",
    appId: "1:137277976047:web:04d955f8bd196cf2"
}

export const createUserProfileDocument = async (userAuth, additionaldata) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
        } catch (err) {
            console.log(err)
        }
    }//if
    return userRef
}//profile document

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase


