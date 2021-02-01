export default (state = {workouts: [], loading: false}, action) => { //always must return state
    //Reducers are pure functions that take the previous state and an action, and return the next state. 
    //A reducer is a function that receives the current state and an action object, decides how to update
    // the state if necessary, and returns the new state
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
        case("DELETING_WORKOUT"): 
            return {...state, loading: true}
        case("WORKOUT_DELETED"): 
            return {...state, 
                loading: false,
                workouts: state.workouts.filter(workout => workout.id != action.payload)
            }
        // case("DELETING_WORKOUT_EXERCISE"): 
        // debugger 
        //     //https://redux.js.org/recipes/structuring-reducers/immutable-update-patterns
        //         return {...state, loading: true}
        // case("WORKOUT_EXERCISE_DELETED"):   
        //     return {...state,
        //         loading: false,
        //         workouts: state.workouts.map(workout => { 
        //             debugger 
        //                     workout.attributes.exercises.filter(exer => exer.id != action.payload)
        //         })
        //     }
        default: 
            return state
    }
} 

//no 1 rule when working with state, we dont do anything destructively
    //so we use ... and not object.assign

    //state.workouts.attributes.exercises.id