import {loadReviews} from '../actions'

const initialState = []

export const reviewReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_REVIEW':
            return [...state, action.payload]
        case 'LOAD_REVIEWS':
            return action.payload
        case 'CLEAR_REVIEWS':
            return []
        default:
            return state
    }
}

// A Thunk (redux-thunk)
export const setReviews = (groupid) => async (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    const reviews = await fetch(`/api/reviews/${groupid}`, {
        method: "GET",
        headers: {
            Authorization: "Bearer " + authToken
        },
    }).then(res => res.json())
    dispatch(loadReviews(reviews))
}