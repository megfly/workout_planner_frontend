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
        case("DELETING_WORKOUT"): 
            return {...state, loading: true}
        case("WORKOUT_DELETED"): 
            return {...state, 
                loading: false,
                workouts: state.workouts.filter(workout => workout.id != action.payload)
            }

        // case("DELETING_WORKOUT_EXERCISE"):
        // debugger 
        //     console.log("this is workout reducer workout state", state)
        //     //state is returning array(0).....
        //     // need to have workouts in here......... ......................
   
        //         return {...state, loading: true}
        // case("WORKOUT_EXERCISE_DELETED"):  
        //     return {...state, 
        //             loading: false,
    
        //        //state.workouts.attributes.exercises
        //        workouts: state.workouts.filter(wo => wo.attributes.exercises.id != action.payload)
        //     } 
        //     //payload will be two different ids
        //     //object key value with the workout id and key value with exercise id


        default: 
            return state
    }
} 

//no 1 rule when working with state, we dont do anything destructively
    //so we use ... and not object.assign

    //state.workouts.attributes.exercises.id