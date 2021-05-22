import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBd45gmu2xiY7NhfLOIg94TGbnLtThn6zY",
    authDomain: "crown-db-ad3a3.firebaseapp.com",
    projectId: "crown-db-ad3a3",
    storageBucket: "crown-db-ad3a3.appspot.com",
    messagingSenderId: "782995836914",
    appId: "1:782995836914:web:574dad1ebc640e59daa56b",
    measurementId: "G-XP0H2RMB9K"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      if (!userAuth) return;
      const userRef = firestore.doc(`user/${userAuth.uid}`)
      const snapShot = await userRef.get();
      if (!snapShot.exists) {
          const {displayName, email} = userAuth;
          const createdAt = new Date();
          try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }

                )
          } catch (error) {
                console.log('error creating user', error.message)
          }
      }
      return userRef;
  }  

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle=() => auth.signInWithPopup(provider);

  export default firebase;
