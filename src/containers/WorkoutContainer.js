//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts, deleteWorkout } from '../actions/workouts'
import { addExercise } from '../actions/exercises'
import WorkoutDisplay from '../components/WorkoutDisplay'
import ExerciseShow from '../components/ExerciseShow'

class WorkoutContainer extends Component {
  //never arrow fct for performace

  componentDidMount(){
      this.props.getWorkouts()
  }

  handleDeleteWorkout = (event) => {
   debugger
    this.props.deleteWorkout(event.target.id)
  }

  render() {
 
    const workoutList = this.props.workouts.map((workout, index) => {
        return <WorkoutDisplay 
          key={workout.id}
          workout_id={workout.id}
          id={workout.id}
          title={workout.attributes.title}
          duration={workout.attributes.duration}
          date={workout.attributes.date}
          handleDeleteWorkout={this.handleDeleteWorkout}

        />
    })

    const workoutDisplayList = this.props.workouts.map(workout => {
 
      workout.attributes.exercises.map(exer => {
      // debugger 
        return <ExerciseShow 
            key={exer.id}
            workout_id={exer.workout_id}
            name={exer.name}
            reps={exer.reps}
            sets={exer.sets}
            weight={exer.weight}
          />
      })
    }) 
     

    return (
      <div className="Workouts">

          {workoutList}
          {workoutDisplayList}

      </div>
        
    )
   }
}
//shop at teh state store and 
//structure what our props look like
const mapStateToProps = state => {
    //debugger 
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps, { getWorkouts, deleteWorkout, addExercise })(WorkoutContainer) //connecting a comp gives dispatch
//addExercise