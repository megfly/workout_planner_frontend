//action object creator functio

export const getWorkouts = () => { 
    //console.log("hello from getworkouts")
    return dispatch => { 
       // console.log("hello from action function")
        dispatch({type: "LOADING_WORKOUTS"}) 
        fetch("http://localhost:3001/api/v1/workouts") 
        .then(res => res.json()) 
        .then(workouts => {
            dispatch({type: "WORKOUTS_LOADED", payload: workouts.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addWorkout = (workout, history) => { 
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
            history.push('/workouts')
        })    
    }
}

//need to pass workout info
export const editWorkout = (workout, workout_id) => {
    console.log(workout)
    return dispatch => {
        dispatch({type: "EDITING_WORKOUT"})
        fetch(`http://localhost:3001/api/v1/workouts/${workout_id}`, {
            method: "PATCH",
            body: JSON.stringify(workout, workout_id),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(workout => {
            dispatch({type: "WORKOUT_EDITED", payload: workout.data, workout_id})
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
//    debugger
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
//                 .then(res => res.json())
//                 .then(workout => dispatch({type: "WORKOUT_EXERCISE_DELETED", payload: workout})) 
//                 //
//             // .then(() => {
//             //     //debugger
//             //     dispatch({type: "WORKOUT_EXERCISE_DELETED", payload: workout_id, id}) //payload: workouts.data}
//             //     })    
//         }
//     }



//2 dispatches when working w thunk.. return a function.. two dispatches
//dispatch is how you send yoru actions to the reducer
//dispatch is from props when connected

//thunk allows us to return a function
//redux only lets us returns actions or objects


//Redux Cycle = Action Creator -> Actions -> Dispatch -> Reducers -> Store/State

//Dispatch function is going to take in an action and going to make a copy of that 
//object and passed it off to different places inside of our application