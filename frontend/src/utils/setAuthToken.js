import axios from 'axios'

// This function will check if there's a token (comming from localStorage)
const setAuthToken = token => {
    if (token) {
         axios.defaults.headers.common['x-auth-token'] = token
    } else {
        delete axios.defaults.headers.common['x-auth-token']
    }
}

export default setAuthToken