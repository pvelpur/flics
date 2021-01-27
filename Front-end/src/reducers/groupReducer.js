import {setGroups} from '../actions'
import axios from 'axios'

const initialState = []

export const groupReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_GROUP':
            return [...state, action.payload]
        case 'SET_GROUPS':
            return action.payload
        case 'CLEAR_GROUPS':
            return []
        default:
            return state
    }
}
 
// A Thunk (redux-thunk)
export const loadGroups = () => async (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    fetch('/api/groups', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            Authorization: "Bearer " + authToken
        },
    }).then(res => {dispatch(setGroups(res.json()))})
    // const options = {
    //     headers: {
    //         'Accept' : 'application/json',
    //         'Authorization': 'Bearer ' + authToken
    //     }
    // }
    // const groups = await axios.get('/api/groups', options)
    
}