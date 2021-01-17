//action object creator function

export const getWorkouts = () => { 
    return dispatch => {
        dispatch({type: "LOADING_WORKOUTS"})
        fetch("http://localhost:3001/api/v1/workouts")
        .then(res => res.json())
        .then(workouts => {
            dispatch({type: "WORKOUTS_LOADED", payload: workouts.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addWorkout = (workout) => { 
    return dispatch => {
        dispatch({type: "ADDING_WORKOUT"})
        fetch("http://localhost:3001/api/v1/workouts", {
            method: "POST",
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(workout => {
            dispatch({type: "WORKOUT_ADDED", payload: workout.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const deleteWorkout = (workout_id) => { 
    return dispatch => {
        dispatch({type: "DELETING_WORKOUT"})
        fetch(`http://localhost:3001/api/v1/workouts/${workout_id}`, {
            method: "DELETE",
            body: JSON.stringify(workout_id),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
      
        .then(() => {
            dispatch({type: "WORKOUT_DELETED", payload: workout_id}) //payload: workouts.data}
            })    
    }
}

// export const deleteWorkoutExercise = (workout_id, id) => { 
//    // debugger
//         return dispatch => {
//             dispatch({type: "DELETING_WORKOUT_EXERCISE"})
//             fetch(`http://localhost:3001/api/v1/workouts/${workout_id}/exercises/${id}`, {
//                 method: "DELETE",
//                 body: JSON.stringify(workout_id, id),
//                 headers: {
//                     'Content-Type': 'application/json',
//                     "Accept": 'application/json'
//                 }
//             })
          
//             .then(() => {
//                 //debugger
//                 dispatch({type: "WORKOUT_EXERCISE_DELETED", payload: workout_id, id}) //payload: workouts.data}
//                 })    
//         }
//     }

//2 dispatches when working w thunk.. return a function.. two dispatches
//dispatch is how you send yoru actions to the reducer
//dispatch is from props when connected

//thunk allows us to return a function
//redux only lets us returns actions or objects