import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'
import { addExercise, deleteExercise } from '../actions/exercises'
//import { deleteWorkoutExercise } from '../actions/workouts'
import ExerciseDisplay from '../components/ExerciseDisplay'

class ExerciseContainer extends Component {

    componentDidMount(){
      //debugger
      //this.props.match.params.id id pass
        const workout_id = this.props.match.params.id
        this.props.getExercises(workout_id)
    }

    handleDeleteExercise = (event) => {

     // debugger 
      console.log("handle delete exercise", event)
      console.log("PROPS", this.props)
      
      const workout_id = this.props.match.params.id
      //const exercise_id = event.target.id 
      //debugger

      //go to the workouts reducer to delete the exercise in workouts.attributes.exercies.id
        //this.props.deleteWorkoutExercise(workout_id, event.target.id)

        //go to exercise reducer to delete the exercise 
        this.props.deleteExercise(workout_id, event.target.id)
      }


    render() {
        const exerciseList = this.props.exercises.map(exercise => {

           console.log("exercise container", exercise)
            return <ExerciseDisplay 
                // workout_title={exercise.attributes.workout.title}
                // workout_duration={exercise.attributes.workout.duration}
                // workout_date={exercise.attributes.workout.date}
                workout_id={exercise.attributes.workout_id} 
                key={exercise.id} 
                id={exercise.id} //exercise id 2 
                name={exercise.attributes.name}
                sets={exercise.attributes.sets}
                reps={exercise.attributes.reps}
                weight={exercise.attributes.weight}
                handleDeleteExercise={this.handleDeleteExercise}
                />
          });
          
//       const workoutList = this.props.workouts.map(workout => {
// //debugger 
//             console.log("exercise container", workout)
//             return <ExerciseDisplay 
//                 key={workout.id}
//                 workout_id={workout.id}
//                 title={workout.attributes.title}
//                 duration={workout.attributes.duration}
//                 date={workout.attributes.date}
//           />
//            });


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
    // workouts: state.workoutReducer.workouts,
    loading: state.exerciseReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
  }
}

export default connect(mapStateToProps, { getExercises, addExercise, deleteExercise })(ExerciseContainer)
