import * as actionTypes from '../actions/actionTypes'

const init = {
    authError: null,
    authErrorMessage: null
}

const authReducer = (state = init, action) => {
    switch(action.type) {
        //TODO: success
        case actionTypes.signup:
            return {
                ...state,
                authError: null,
                authErrorMessage: null
            }
        case actionTypes.signin:
            return {
                ...state,
                authError: null,
                authErrorMessage: null
            }
        case actionTypes.signout:
            return { ...state }

            //TODO: error
        case actionTypes.error_signin:
            return {
                ...state,
                authError: true,
                authErrorMessage: action.error.message
            }
        case actionTypes.error_signup:
            return {
                ...state,
                authError: true,
                authErrorMessage: action.error
            }

            //TODO: UI
        case actionTypes.closeSnackBar:
            return {
                ...state,
                authError: null,
                authErrorMessage: null
            }
        default: return state
    }
}

export default authReducer