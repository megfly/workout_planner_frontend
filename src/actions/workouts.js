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
//2 dispatches when working w thunk.. return a function.. two dispatches
//dispatch is how you send yoru actions to the reducer
//dispatch is form props when connected