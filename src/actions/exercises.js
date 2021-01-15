//action object creator function

export const getExercises = (workout_id) => { 
    // debugger
    return dispatch => {
        dispatch({type: "LOADING_EXERCISES"})
        // nest with the params, what we call it here- it will be called that in controller method....
        // debugger 
        fetch(`http://localhost:3001/api/v1/workouts/${workout_id}/exercises`) 
        .then(res => res.json())
        .then(exercises => {
            // debugger
           //console.log(exercises.data)
            dispatch({type: "EXERCISES_LOADED", payload: exercises.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addExercise = (exercise, workout_id) => { 
  // debugger
    console.log("ADD EXERCISE", exercise)
    console.log("WHY IS THIS THE SAME OBJECT", workout_id)
    return dispatch => {
        dispatch({type: "ADDING_EXERCISE"})
        //fetch(`http://localhost:3001/api/v1/exercises`, {
            debugger 
        fetch(`http://localhost:3001/api/v1/workouts/${workout_id}/exercises`, {
            method: "POST",
            body: JSON.stringify(exercise, workout_id),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
        .then(res => res.json())
        .then(exercise => {
            //debugger
            dispatch({type: "EXERCISE_ADDED", payload: exercise.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const deleteExercise = (workout_id, id) => { 
 // debugger
    return dispatch => {
        dispatch({type: "DELETING_EXERCISE"})
        fetch(`http://localhost:3001/api/v1/workouts/${workout_id}/exercises/${id}`, {
            method: "DELETE",
            body: JSON.stringify(workout_id, id),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
      
        .then(() => {
            //debugger
            dispatch({type: "EXERCISE_DELETED", payload: workout_id, id}) //payload: workouts.data}
            })    
    }
}