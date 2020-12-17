export const login = (user, authToken) => {
    return {
        type: 'LOGIN',
        payload: {
            user,
            authToken
        }
    }
}