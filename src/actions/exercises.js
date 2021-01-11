//action object creator function

export const getExercises = () => { 
    //debugger
    return dispatch => {
        dispatch({type: "LOADING_EXERCISES"})
        fetch("http://localhost:3001/api/v1/exercises")
        .then(res => res.json())
        .then(exercises => {
            //debugger
            dispatch({type: "EXERCISES_LOADED", payload: exercises.data}) //payload: workouts.data}
            })    
    }
}

//passing it workout info
export const addExercise = (exercise) => { 
    return dispatch => {
        dispatch({type: "ADDING_EXERCISE"})
        fetch("http://localhost:3001/api/v1/exercises", {
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