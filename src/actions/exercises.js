export const getExercises = () => {
    return dispatch => {
        dispatch({type: "LOADING_EXERCISES"})
        fetch("http://localhost:3001/api/v1/exercises")
        .then(res => res.json())
        .then(exercises => dispatch({type: "EXERCISES_LOADED", payload: exercises}))
    }
}