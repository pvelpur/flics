const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            return {...state, auth: {currentUser: action.payload.user, authToken: action.payload.authToken}}
        case 'Logout':
            return {}
        default:
            return state
    }
}

export default authReducer