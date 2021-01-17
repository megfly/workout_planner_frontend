//action object creator function

export const getExercises = (workout_id) => { 
    return dispatch => {
        dispatch({type: "LOADING_EXERCISES"})
        fetch(`http://localhost:3001/api/v1/workouts/${workout_id}/exercises`) 
        .then(res => res.json())
        .then(exercises => {
            dispatch({type: "EXERCISES_LOADED", payload: exercises.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addExercise = (exercise, workout_id) => { 
    return dispatch => {
        dispatch({type: "ADDING_EXERCISE"})
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
            dispatch({type: "EXERCISE_ADDED", payload: exercise.data}) //payload: workouts.data}
            })    
    }
}

export const deleteExercise = (workout_id, id) => { 
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
            dispatch({type: "EXERCISE_DELETED", payload: workout_id, id}) //payload: workouts.data}
            })    
    }
}