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
        event.preventDefault()
        this.props.deleteExercise(event.target.id)
      }

    //i want to click on a workout and it display the exercises.... so my exercises  

    render() {
       // const { addExercise } = this.props

        const exerciseList = this.props.exercises.map(exercise => {
           //debugger
           console.log("exercise container", exercise)
            return <ExerciseDisplay 
                key={exercise.id} 
                id={exercise.id}
                exerciseId={exercise.id}
                name={exercise.attributes.name}
                sets={exercise.attributes.sets}
                reps={exercise.attributes.reps}
                weight={exercise.attributes.weight}
                handleDeleteExercise={this.props.deleteExercise}

                //handleAddExercise={this.props.addExercise}


            //examples
                //handleRemoveQuote={this.props.removeQuote}
                //handleUpvoteQuote={this.props.upvoteQuote}
                //handleDownvoteQuote={this.props.downvoteQuote}
                />
          })

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
