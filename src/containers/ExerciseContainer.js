import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'
import { addExercise } from '../actions/exercises'
import ExerciseDisplay from '../components/ExerciseDisplay'

class ExerciseContainer extends Component {

    componentDidMount(){
        const workout_id = this.props.match.params.id
        this.props.getExercises(workout_id)
    }

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

export default connect(mapStateToProps, { getExercises, addExercise })(ExerciseContainer)

//The connect() function connects a React component to a Redux store.
//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.