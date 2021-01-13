//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts, deleteWorkout } from '../actions/workouts'
import { addExercise } from '../actions/exercises'
import WorkoutDisplay from '../components/WorkoutDisplay'

class WorkoutContainer extends Component {
  //never arrow fct for performace

  componentDidMount(){
      this.props.getWorkouts()
  }

  handleDeleteWorkout = (event) => {
    event.preventDefault()
    this.props.deleteWorkout(event.target.id)
  }

  // handleAddExercise = (event) => {
  //   this.props.addExercise(event.target.id)
  // }


  render() {
    //console.log("workout container props is", this.props)
 //debugger 
    const workoutList = this.props.workouts.map((workout, index) => {
        return <WorkoutDisplay 
          key={workout.id}
          //key={index}
          workoutId={workout.id}
          id={workout.id}
          title={workout.attributes.title}
          duration={workout.attributes.duration}
          date={workout.attributes.date}
          handleDeleteWorkout={this.props.deleteWorkout}
         // handleAddExercise={this.props.handleAddExercise}
    
        />
    })
     

    return (
      <div className="Workouts">

          {workoutList}

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