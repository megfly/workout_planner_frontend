import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'
import { addExercise, deleteExercise } from '../actions/exercises'
import ExerciseDisplay from '../components/ExerciseDisplay'

class ExerciseContainer extends Component {

    componentDidMount(){
        this.props.getExercises()
    }

    handleDeleteExercise = (event) => {
      ///////////////////////////////
      ///////////////////////////////
      /////////////////////////////// DELETING EXERCISE 404
      //we need to target the wokrout id and the exercise id.......??

   // debugger
      console.log("handle delete exercise", event)
      debugger
        this.props.deleteExercise(event.target.id)
        //event.target.id = exercise id...
      }

    render() {

        const exerciseList = this.props.exercises.map(exercise => {
         //debugger
           console.log("exercise container", exercise)
            return <ExerciseDisplay 
                workout_id={exercise.attributes.workout_id} //
                key={exercise.id} 
                id={exercise.id} //exercise id 2 
                name={exercise.attributes.name}
                sets={exercise.attributes.sets}
                reps={exercise.attributes.reps}
                weight={exercise.attributes.weight}
                handleDeleteExercise={this.handleDeleteExercise}
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
  return {
    exercises: state.exerciseReducer.exercises, //found in reducer
    loading: state.exerciseReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
  }
}

export default connect(mapStateToProps, { getExercises, addExercise, deleteExercise })(ExerciseContainer)
