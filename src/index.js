// react
import React from 'react'
import ReactDOM from 'react-dom'
// redux
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider, useSelector } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/'

// firebase
import { ReactReduxFirebaseProvider, getFirebase, isLoaded } from 'react-redux-firebase'
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';
import fbConfig from './store/config/firebaseConfig'
import firebase from 'firebase/app'

// style
import './index.css'

// components
import App from './App'
import Spinner from './components/UI/Spinner'

// other
import * as serviceWorker from './serviceWorker';


function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if(!isLoaded(auth)) return <Spinner />
    return children
}

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase, fbConfig)
  )
)

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  userProfile: 'users',
  presence: 'presence',
  session: 'session'
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister();