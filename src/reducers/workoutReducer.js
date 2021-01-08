export default (state = {workouts: [], loading: false}, action) => { //always must return state
    switch(action.type){
        case("LOADING_WORKOUTS"):
            return {...state, loading: true}
        case("WORKOUTS_LOADED"):
            return {...state, 
                loading: false,
                workouts: action.payload
            }
        case("ADDING_WORKOUT"):
            return {...state, loading: true}
        case("WORKOUT_ADDED"):
            return {...state, 
                loading: false,
                workouts: [...state.workouts, action.payload]
            }
        default: 
            return state
    }
} 

//no 1 rule when working with state, we dont do anything destructively
    //so we use ... and not object.assign