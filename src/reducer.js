let assignUser = (oldState, action) => ({...oldState, user: action.data})
let assignGoals = (oldState, action) => ({...oldState, goals: action.data.goals})

let actionRouter = {
    "ASSIGN_USER": assignUser,
    "ASSIGN_GOALS": assignGoals
}

let reducer = (oldState, action) => {
    if (actionRouter[action.type]) {
        return actionRouter[action.type](oldState, action)
    } else {
        return oldState
    }
}

export default reducer;