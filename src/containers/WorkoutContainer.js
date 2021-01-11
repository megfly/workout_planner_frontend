//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts, deleteWorkout } from '../actions/workouts'
import { addExercise } from '../actions/exercises'
import WorkoutDisplay from '../components/WorkoutDisplay'
import ExerciseForm from './ExerciseForm'
import AddExerciseButton from '../components/AddExerciseButton'

//import CalendarDisplay from '../components/CalendarDisplay'
//import { addExercise } from '../actions/exercises'

class WorkoutContainer extends Component {
  //never arrow fct for performace
  //https://flaviocopes.com/react-show-different-component-on-click/
  constructor(props) {
    super()
    this.state = { isEmptyState: true}
  }

  triggerAddExerciseState = () => {
    this.setState({
      ...this.state,
      isEmptyState: false,
      isAddExerciseState: true
    })
  }


  componentDidMount(){
      this.props.getWorkouts()
  }

  handleDeleteWorkout = (event) => {
    event.preventDefault()
    this.props.deleteWorkout(event.target.id)
  }

  handleAddExercise = (event) => {
    debugger
  }

  render() {
    //console.log("workout container props is", this.props)
 //debugger 
    const workoutList = this.props.workouts.map((workout, index) => {
        return <WorkoutDisplay 
          key={workout.id}
          //key={index}
          id={workout.id}
          title={workout.attributes.title}
          duration={workout.attributes.duration}
          date={workout.attributes.date}
          handleDeleteWorkout={this.props.deleteWorkout}
          handleAddExercise={this.props.handleAddExercise}
          triggerAddExerciseState={this.state}

          //addExercise={this.triggerAddExerciseState}
          // handleAddExercise={this.props.addExercise}
        />
    })

    // const workoutPropsForCalendar = this.props.workouts.map((workout, index) => {
    //   return <CalendarDisplay 
    //   key={workout.id}
    //   //key={index}
    //   title={workout.attributes.title}
    //   duration={workout.attributes.duration}
    //   date={workout.attributes.date}
    // />
    // })
     

    return (
      <div className="Workouts">
        {/* <AddExerciseButton addExercise={this.triggerAddExerciseState} /> */}
          {/* <WorkoutDisplay workoutList={workoutList} /> */}
          {workoutList}
          {/* {workoutPropsForCalendar} */}
      {this.state.isEmptyState && <AddExerciseButton addExercise={this.triggerAddExerciseState} />}
  
      {this.state.isAddExerciseState && <ExerciseForm />}
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