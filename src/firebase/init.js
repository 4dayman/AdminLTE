import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
// import 'firebase/database'
// import 'firebase/storage'


const firebaseConfig = {
    apiKey: "AIzaSyAz6WI89Fem46JXvS8vZF8jIZeRPf9TrVc",
    authDomain: "kino-cms-e6548.firebaseapp.com",
    projectId: "kino-cms-e6548",
    storageBucket: "kino-cms-e6548.appspot.com",
    messagingSenderId: "326552603247",
    appId: "1:326552603247:web:86bf55f53128ab787c9b9a",
    measurementId: "G-NCWPE8X0EE"
};

// Initialize Firebase
initializeApp(firebaseConfig)
// const firebaseApp = initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()
export default db
// export const db = getFirestore(firebaseApp)
// export const db = getFirestore()
// const timestamp = db.firestore.FieldValue.serverTimestamp
// export {timestamp}

//generate & export auth object
// export const auth = getAuth(firebaseApp)
// const auth = getAuth()
export const auth = getAuth()

// const storage = getStorage()
export const storage = getStorage()



// export { db, auth, storage }