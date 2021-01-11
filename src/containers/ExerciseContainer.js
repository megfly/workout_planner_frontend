import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'

class ExerciseContainer extends Component {

    componentDidMount(){
        this.props.getExercises()
    }

    //i want to click on a workout and it display the exercises.... so my exercises  

    // const exerciseList = this.props.workouts.map((workout, index) => {
    //     return <WorkoutDisplay 
    //       key={workout.id}
    //       //key={index}
    //       id={workout.id}
    //       title={workout.attributes.title}
    //       duration={workout.attributes.duration}
    //       date={workout.attributes.date}
    //       //handleAddExercise={this.props.addExercise}
    //     />
    // })

    render() {
        return (
            <div className="exercises">
                
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

export default connect(mapStateToProps, { getExercises })(ExerciseContainer)
