import * as actionTypes from './actionTypes'

export const signIn = (credentials) => {
    console.log('[actionCreator] get credentials', credentials)
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebaseInstance = getFirebase()

        firebaseInstance.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: actionTypes.signin})
        }).catch(error => {
            setTimeout(() => {
                dispatch({ type: actionTypes.closeSnackBar })
                }, 3000)
            dispatch({ type: actionTypes.error_signin, error })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase, getFirestore }) => {
        const firebaseInstance = getFirebase()
        firebaseInstance.auth().signOut()
        .then(() => {
            dispatch({ type: actionTypes.signout })
        })
    }
}

export const signUp = newUser => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebaseInstance = getFirebase()
        const firestoreInstance = getFirestore()

        firebaseInstance.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        ).then(response => {
            return firestoreInstance.collection('users').doc(response.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({ type: actionTypes.signup })
        }).catch(error => {
            dispatch({ type: actionTypes.error_signup, error })
        })
    }
}