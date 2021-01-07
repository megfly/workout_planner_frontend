import { combineReducers } from 'redux'
import workoutReducer from './workoutReducer'
import exerciseReducer from './exerciseReducer'

const rootReducer = combineReducers({
    workoutReducer, 
    exerciseReducer
})

export default rootReducer