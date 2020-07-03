import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = []

export default function (state = initialState, action) {

    const {type, payload} = action

    switch (type) {
        case SET_ALERT:
            return [...state, payload] //We make a copy of the state because if there's already some alert there we want to add one 

        case REMOVE_ALERT:
            return state.filter(alert => alert.id !== payload)//We make this to remove only one specific alert
        default:
            return state;
    }
}