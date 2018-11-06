let assignUser = (oldState, action) => ({...oldState, user: action.data})
let assignGoals = (oldState, action) => ({...oldState, goals: action.data.goals})

let updatePrivacy = (oldState, action) => {
    let updatedGoal = oldState.goals.filter(goal => goal.id === action.data.id)
    updatedGoal.goal_privacy = action.data.newStatus
    console.log(updatedGoal)
    return oldState
}

let actionRouter = {
    "ASSIGN_USER": assignUser,
    "ASSIGN_GOALS": assignGoals,
    "UPDATE_PRIVACY": updatePrivacy
}

let reducer = (oldState, action) => {
    if (actionRouter[action.type]) {
        return actionRouter[action.type](oldState, action)
    } else {
        return oldState
    }
}

export default reducer;