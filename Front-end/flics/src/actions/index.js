//AUTHENTICATION
export const login = (user, authToken) => {
    return {
        type: 'LOGIN',
        payload: {
            user,
            authToken
        }
    }
}

export const signout = () => {
    return {
        type: 'SIGNOUT'
    }
}

//GROUPS
export const setGroups = (groups) => {
    return {
        type: 'SET_GROUPS',
        payload: groups
    }
}
export const addGroup = (group) => {
    return {
        type: 'ADD_GROUP',
        payload: group
    }
}
export const clearGroups = () => {
    return {
        type: 'CLEAR_GROUPS',
    }
}

//MEDIA (MyList)
export const setMedia = (favorites) => {
    return {
        type: 'SET_MEDIA',
        payload: favorites
    }
}

// Reviews
export const loadReviews = (reviews) => {
    return {
        type: 'LOAD_REVIEWS',
        payload: reviews
    }
}

export const addReview = (review) => {
    return {
        type: 'ADD_REVIEW',
        payload: review
    }
}

export const clearReviews = () => {
    return {
        type: 'CLEAR_REVIEWS',
    }
}