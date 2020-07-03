import axios from 'axios'
import { GET_PROFILE, GET_PROFILE_ERROR } from './types'


// Get current user's profile
export const getCurrentUserProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me')
        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_PROFILE_ERROR,
            payload: {msg: error.response.data.msg, status: error.response.status}
        })
    }
}