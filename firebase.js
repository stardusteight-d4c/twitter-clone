// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBkjm4VKY4Fk90qxMdDf8Guz3P7rqwDH8k',
  authDomain: 'twitter-clone-ed0c9.firebaseapp.com',
  projectId: 'twitter-clone-ed0c9',
  storageBucket: 'twitter-clone-ed0c9.appspot.com',
  messagingSenderId: '539515234424',
  appId: '1:539515234424:web:1c7974773216140c3ce58d',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export default app
export { db, storage }
