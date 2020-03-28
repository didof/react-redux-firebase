import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAoqYUzKWSQJMm7lGfGUUwatJtJa2ptl4I",
    authDomain: "digital-hostel-c750e.firebaseapp.com",
    databaseURL: "https://digital-hostel-c750e.firebaseio.com",
    projectId: "digital-hostel-c750e",
    storageBucket: "digital-hostel-c750e.appspot.com",
    messagingSenderId: "47010820033",
    appId: "1:47010820033:web:d1463d23c75c837bdb4940"
}

firebase.initializeApp(firebaseConfig)

export default firebase