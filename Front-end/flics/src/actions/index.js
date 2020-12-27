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