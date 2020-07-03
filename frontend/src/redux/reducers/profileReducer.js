import { GET_PROFILE, GET_PROFILE_ERROR } from "../actions/types";

const initialState = {
    profile: null,
    profiles: [],
    loading: true,
    error: {}
}

export default function (state = initialState, action) {
    const { type, payload } = action

    switch (type) {
        case GET_PROFILE:
            return {
                ...state,
                profile: payload,
                loading: false
            }

        case GET_PROFILE_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            }

        default:
            return state
    }
}