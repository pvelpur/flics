import {setMedia} from '../actions'
import axios from 'axios'

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
    // const list = await fetch('/api/favorites', {
    //     method: "GET",
    //     headers: {
    //         "Accept": "application/json",
    //         Authorizaion: "Bearer " + authToken
    //     },
    // }).then(res => res.json())
    const options = {
        headers: {
            'Accept' : 'application/json',
            'Authorization': 'Bearer ' + authToken
        }
    }
    const list = await axios.get('/api/favorites', options)
    dispatch(setMedia(list.data))
}