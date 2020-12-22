const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, currentUser: action.payload.user, authToken: action.payload.authToken}
        case 'SIGNOUT':
            return {}
        default:
            return state
    }
}

export default authReducer