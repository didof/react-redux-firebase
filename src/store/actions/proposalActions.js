import * as actionTypes from './actionTypes'

export const createProposal = proposal => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore()
        firestore.collection('proposals').add({
            ...proposal,
            authorFirstName: 'John',
            authorLastName: 'Doe',
            authorId: 420,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: actionTypes.createProposal, proposal })
        }).catch(error => {
            dispatch({ type: actionTypes.error_createProposal, error})
        })
    }
}