const authReducer = (state = {}, action) => {
    switch(action.type){
        case 'LOGIN':
            const {_id, username, email} = action.payload.user
            return {...state, currentUser: {_id, username, email}, authToken: action.payload.authToken}
        case 'SIGNOUT':
            return {}
        default:
            return state
    }
}

export default authReducer