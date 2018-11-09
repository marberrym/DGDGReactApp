let assignUser = (oldState, action) => ({...oldState, user: action.data})
let assignGoals = (oldState, action) => ({...oldState, goals: action.data.goals})

let updatePrivacy = (oldState, action) => {
    let updatedGoal = oldState.goals.filter(goal => goal.id === action.data.id)
    updatedGoal[0].goal_privacy = action.data.privacy
    
    let newGoals = oldState.goals.filter(goal => goal.id !== action.data.id).concat(updatedGoal)
    
    return {...oldState, goals: newGoals}
}

let completeGoal = (oldState, action) => {
    let updatedGoal = oldState.goals.filter(goal => goal.id === action.data.id)
    updatedGoal[0].goal_status = 3
    console.log(action);

    let newGoals = oldState.goals.filter(goal => goal.id !== action.data.id).concat(updatedGoal)
    return {...oldState, goals: newGoals}
}

let actionRouter = {
    "ASSIGN_USER": assignUser,
    "ASSIGN_GOALS": assignGoals,
    "UPDATE_PRIVACY": updatePrivacy,
    "COMPLETE_GOAL": completeGoal,
}

let reducer = (oldState, action) => {
    if (actionRouter[action.type]) {
        return actionRouter[action.type](oldState, action)
    } else {
        return oldState
    }
}

export default reducer;