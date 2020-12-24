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