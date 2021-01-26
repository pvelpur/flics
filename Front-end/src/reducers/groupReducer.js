import {setGroups} from '../actions'

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
    const groups = await fetch('http://localhost:8080/api/groups', {
        method: "GET",
        headers: {
            "Accept": "application/json",
            Authorization: "Bearer " + authToken
        },
    }).then(res => res.json())
    dispatch(setGroups(groups))
}