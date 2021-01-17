import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'
import { addExercise } from '../actions/exercises'
//import { deleteWorkoutExercise } from '../actions/workouts'
import ExerciseDisplay from '../components/ExerciseDisplay'

class ExerciseContainer extends Component {

    componentDidMount(){
        const workout_id = this.props.match.params.id
        this.props.getExercises(workout_id)
    }

    // handleDeleteExercise = (event) => {
    //   debugger 
    //   const workout_id = this.props.match.params.id
    //   this.props.deleteWorkoutExercise(workout_id, event.target.id)
    //   }


    render() {
        const exerciseList = this.props.exercises.map(exercise => {

           console.log("exercise container", exercise)
            return <ExerciseDisplay 
                workout_id={exercise.attributes.workout_id} 
                key={exercise.id} 
                id={exercise.id} 
                name={exercise.attributes.name}
                sets={exercise.attributes.sets}
                reps={exercise.attributes.reps}
                weight={exercise.attributes.weight}
                //handleDeleteExercise={this.handleDeleteExercise}
                />
          });
          

        return (
            <div className="exercises">
                {exerciseList}
            </div>
        )
    }
}

const mapStateToProps = state => {
  //debugger 
  //added my workoutReducer in order to try to delete the exercises from workouts array ?
  return {
    exercises: state.exerciseReducer.exercises, //found in reducer
    //workouts: state.workoutReducer.workouts,
    loading: state.exerciseReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
  }
}

export default connect(mapStateToProps, { getExercises, addExercise })(ExerciseContainer)
