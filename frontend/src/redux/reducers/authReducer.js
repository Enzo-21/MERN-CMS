import { REGISTER_FAIL, REGISTER_SUCCESS, AUTH_SUCCESS, AUTH_FAIL, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types"

// For the initial state we will have an object that will contain the following items:
const initialState = {
    token: localStorage.getItem('token'), //We're looking for a token in localStorage
    isAuthenticated: null, // This is initially set to null but when we make a request to register or login (and we get a successful response) we will set isAuthenticated to true
    loading: true, // We want to make sure that all requests have been done. Loading is going to be set to true by default and once we make all requests and get a response, loading will be false
    user: null // When we get the user data this will change to that data
}

export default function (state = initialState, action) {

    const { type, payload } = action

    switch (type) {

        // When a user is signing up
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                ...payload,
                token: null, // Before we just removed it from localStorage, here we're setting its value to null
                isAuthenticated: false,
                loading: false
            }


        // When a user is being authenticated after signing up or logging in
        case AUTH_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }

        case AUTH_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                ...payload,
                token: null, // Before we just removed it from localStorage, here we're setting its value to null
                isAuthenticated: false,
                loading: false
            }


        // When a user logs in
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }

        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                ...payload,
                token: null, // Before we just removed it from localStorage, here we're setting its value to null
                isAuthenticated: false,
                loading: false
            }

        // When a user logs out
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                ...payload,
                token: null, // Before we just removed it from localStorage, here we're setting its value to null
                isAuthenticated: false,
                loading: false
            }

        default: return state
    }
}