//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts, deleteWorkout } from '../actions/workouts'
import { addExercise } from '../actions/exercises'
//import { deleteWorkoutExercise } from '../actions/workoutexercises'
import WorkoutDisplay from '../components/WorkoutDisplay'
//import WorkoutExerciseDisplay from '../components/WorkoutExerciseDisplay'

class WorkoutContainer extends Component {
  //never arrow fct for performace

  componentDidMount(){
    //debugger 
      this.props.getWorkouts()
  }

  handleDeleteWorkout = (event) => {
  // debugger
    this.props.deleteWorkout(event.target.id)
  }

  handleDeleteWorkoutExercise = (event) => {
    debugger 
    console.log("handle delete exercise", event)
    console.log("PROPS", this.props)
    
    const workout_id = this.props.match.params.id
    //debugger
    
      //this.props.deleteWorkoutExercise(workout_id, event.target.id)
      //event.target.id = exercise id...
    }

  render() {
 
    //cannot read property of undefined
    const workoutList = this.props.workouts.map((workout, index) => {
      //debugger
        return <WorkoutDisplay 
          key={workout.id}
          workout_id={workout.id}
          id={workout.id}
          title={workout.attributes.title}
          duration={workout.attributes.duration}
          date={workout.attributes.date}
          handleDeleteWorkout={this.handleDeleteWorkout}
          //handleDeleteWorkoutExercise={this.handleDeleteWorkoutExercise}
        />
    })

    return (
      <div className="Workouts">

          {workoutList}
          {/* {workoutListForExercise} */}

      </div>
        
    )
   }
}
//shop at teh state store and 
//structure what our props look like
const mapStateToProps = state => {
    // debugger 
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps, { getWorkouts, deleteWorkout, addExercise })(WorkoutContainer) //connecting a comp gives dispatch
//addExercise