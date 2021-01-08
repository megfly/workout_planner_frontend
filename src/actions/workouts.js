//action object creator function

export const getWorkouts = () => { 
    return dispatch => {
        dispatch({type: "LOADING_WORKOUTS"})
        fetch("http://localhost:3000/api/v1/workouts")
        .then(res => res.json())
        .then(workouts => {
            //debugger
            dispatch({type: "WORKOUTS_LOADED", payload: workouts.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addWorkout = (workout) => { 
    return dispatch => {
        dispatch({type: "ADDING_WORKOUT"})
        fetch("http://localhost:3000/api/v1/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(workout => {
            //debugger
            dispatch({type: "WORKOUT_ADDED", payload: workout.data}) //payload: workouts.data}
            })    
    }
}
//2 dispatches when working w thunk.. return a function.. two dispatches
//dispatch is how you send yoru actions to the reducer
//dispatch is from props when connected

//thunk allows us to return a function
//redux only lets us returns actions or objects