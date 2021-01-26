import {setMedia} from '../actions'

const initialState = []

export const myListReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_MEDIA':
            return [...state, action.payload]
        case 'SET_MEDIA':
            return action.payload
        case 'CLEAR_MEDIA':
            return []
        default:
            return state
    }
}
 
// A Thunk (redux-thunk)
export const loadMedia = () => async (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const list = await fetch('/api/favorites', {
        method: "GET",
        headers: {
            'Accept': 'application/json',
            Authorization: "Bearer " + authToken
        },
    }).then(res => res.json())
    dispatch(setMedia(list))
}