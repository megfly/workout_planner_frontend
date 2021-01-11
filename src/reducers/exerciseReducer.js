export default (state = {exercises: [], loading: false}, action) => { //always must return state
    switch(action.type){
        case("LOADING_EXERCISES"):
            return {...state, loading: true}
        case("EXERCISES_LOADED"):
            return {...state, 
                loading: false,
                workouts: action.payload
            }
        // case("ADDING_EXERCISE"):
        //     return {...state, loading: true}
        // case("EXERCISE_ADDED"):
        //     return {...state, 
        //         loading: false,
        //         workouts: [...state.workouts, action.payload]
        //     }
        default: 
            return state
    }
} 

//no 1 rule when working with state, we dont do anything destructively
    //so we use ... and not object.assign