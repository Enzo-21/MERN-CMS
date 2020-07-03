import axios from "axios"
import { REGISTER_FAIL, REGISTER_SUCCESS, AUTH_FAIL, AUTH_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT } from "../actions/types";
import setAuthToken from "../../utils/setAuthToken";

// Register user
export const register = ({name, email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({name, email, password})

    try {
        const res = await axios.post('/api/users', body, config)
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(authUser())
    } catch (error) {

        const errors = error.response.data.errors;


        dispatch({
            type: REGISTER_FAIL,
            payload: {errors}
        })
    }
}

// Login user
export const login = ({email, password}) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({email, password})

    try {
        const res = await axios.post('/api/auth', body, config)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
        dispatch(authUser())
    } catch (error) {

        const errors = error.response.data.errors;


        dispatch({
            type: LOGIN_FAIL,
            payload: {errors}
        })
    }
}

// Authenticate a user
export const authUser = () => async dispatch => {
    // We want to check if there's a token. If there is, we will put it in a global header (x-auth-token)
    if (localStorage.token) {
        setAuthToken(localStorage.token)
    }

    //Now we make the request
    try {
        const res = await axios.get('/api/auth')
        dispatch({
            type: AUTH_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: AUTH_FAIL,
        })
    }

}

// Logout
export const logout = () => async dispatch =>{
    dispatch({
        type: LOGOUT
    })
}