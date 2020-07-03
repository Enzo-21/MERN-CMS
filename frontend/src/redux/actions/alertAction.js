import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert =  (title, msg, alertType) => async dispatch => {
    const id = uuidv4() //We're getting a random universal id
   await dispatch({
        type: SET_ALERT,
        payload: {title, msg, alertType, id}
    })
    
 // Although antd provides an alert that disappears by itself after some seconds, it just disappears from the UI. This means that the alert is in the array of the redux store and if the user gets an alert for the second time it will get two alerts that will disappear after some seconds, and then three, and then four...
    // So to prevent this from happening we have to remove that alert the user has already seen from the app level state:
    dispatch({
        type: REMOVE_ALERT,
        payload: id
    })
   
}