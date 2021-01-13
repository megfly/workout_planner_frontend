//action object creator function

export const getExercises = () => { 
    //debugger
    return dispatch => {
        dispatch({type: "LOADING_EXERCISES"})
        fetch("http://localhost:3001/api/v1/exercises")
        .then(res => res.json())
        .then(exercises => {
           //console.log(exercises.data)
            dispatch({type: "EXERCISES_LOADED", payload: exercises.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addExercise = (exercise, workoutId) => { 
  // debugger
    console.log("ADD EXERCISE", exercise)
    console.log("WHY IS THIS THE SAME OBJECT", workoutId)
    return dispatch => {
        dispatch({type: "ADDING_EXERCISE"})
        //fetch(`http://localhost:3001/api/v1/exercises`, {
        fetch(`http://localhost:3001/api/v1/workouts/${workoutId}/exercises`, {
            method: "POST",
            body: JSON.stringify(exercise),
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
export const deleteExercise = (id) => { 
   // debugger
    return dispatch => {
        dispatch({type: "DELETING_EXERCISE"})
        fetch(`http://localhost:3001/api/v1/exercises/${id}`, {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json'
            }
        })
      
        .then(() => {
            //debugger
            dispatch({type: "EXERCISE_DELETED", payload: id}) //payload: workouts.data}
            })    
    }
}