import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'
import { addExercise } from '../actions/exercises'
import ExerciseDisplay from '../components/ExerciseDisplay'

class ExerciseContainer extends Component {

    componentDidMount(){
        this.props.getExercises()
    }

    //i want to click on a workout and it display the exercises.... so my exercises  

    render() {
        const { addExercise } = this.props

        const exerciseList = this.props.exercises.map(exercise => {
            return <ExerciseDisplay 
                key={exercise.id} 
                exerciseId={exercise.id}
                name={exercise.attributes.name}
                sets={exercise.attributes.sets}
                reps={exercise.attributes.reps}
                weight={exercise.attributes.weight}

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
    exercises: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
  }
}

export default connect(mapStateToProps, { getExercises, addExercise })(ExerciseContainer)
