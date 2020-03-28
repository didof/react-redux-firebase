import { combineReducers } from 'redux'
import authReducer from './authReducer'
import proposalsReducer from './proposalsReducer'
import { firestoreReducer } from 'redux-firestore'
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
    auth: authReducer,
    proposals: proposalsReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer