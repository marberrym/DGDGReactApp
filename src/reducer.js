let assignUser = (oldState, action) => ({...oldState, user: action.data})

let actionRouter = {
    "ASSIGN_USER": assignUser
}

let reducer = (oldState, action) => {
    if (actionRouter[action.type]) {
        return actionRouter[action.type](oldState, action)
    } else {
        return oldState
    }
}

export default reducer;