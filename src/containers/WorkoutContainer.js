//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts, deleteWorkout } from '../actions/workouts'
import { addExercise } from '../actions/exercises'
import WorkoutDisplay from '../components/WorkoutDisplay'
//import CalendarDisplay from '../components/CalendarDisplay'

class WorkoutContainer extends Component {
  //never arrow fct for performace

  //assigning local state
  state = {
    sorted: false, 
    // workouts: []
  }

  componentDidMount(){
      this.props.getWorkouts()
  }

  handleDeleteWorkout = (event) => {
    this.props.deleteWorkout(event.target.id)
  }

 compareWorkouts = () => {
   //3
   
  return function (a, b) {

//the parameters (a and b)are two elements from the array
  let nameA = a.attributes.title.toUpperCase(); // ignore upper and lowercase
  let nameB = b.attributes.title.toUpperCase(); // ignore upper and lowercase
 

//if a appears before the second argument (b), return negative numner
  if (nameA < nameB) { //ascending
    return -1;
  }

  //if first arg appears after, return positive number
  if (nameA > nameB) { //descending
    return 1;
  }

  // if args are equal we return 0
  return 0;
}}
 
sortWorkouts() {
  //2
  
  if (this.state.sorted === true){
      //`Array.prototype.sort()` is destructive..... want to use spread operator to make shallow copy of workouts array and then sorting it
    let workoutsCopy = [...this.props.workouts];
    workoutsCopy.sort(this.compareWorkouts())
    return workoutsCopy;
  }else{
    return this.props.workouts 
  }
}


toggleState = () => {
  //1
  
    //boolean for its either in order or not true/false
    if (this.state.sorted) {
      this.setState({
        sorted: false 
      })
    } else {
    //setstate for the change
    this.setState({
      sorted: true,
    })
  }
}

  render() {
//`render()` determines what gets displayed, based on props and state
// render is a lifecycle method of react. return is just pure javascript for returning output. 
 
    //when the page is rendered/displayed we have:
    let workouts = this.props.workouts 
    let sortedworkouts = this.sortWorkouts(workouts)
    
 
    return (
      <div className="Workouts">
          
            {sortedworkouts.map((workout, i) => 
              <WorkoutDisplay 
                  key={workout.id}
                  workout_id={workout.id}
                  id={workout.id}
                  title={workout.attributes.title}
                  duration={workout.attributes.duration}
                  date={workout.attributes.date}
                  handleDeleteWorkout={this.handleDeleteWorkout}
                  />
            )}
        
          <button
            //this syntax in class  comp ensures 'this' is bound within handleClick
            //The bind() method creates a new function that, when called, 
            //has its this keyword set to the provided value
            onClick={this.toggleState}

            // If you aren’t using class fields syntax, you can use an arrow function in the 
            //callback: onClick={() => this.toggleState()} 
          >
            Sort!
          </button>
      </div>   
    )
   }
}
//shop at teh state store and structure what our props look like
const mapStateToProps = state => {
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps, { getWorkouts, deleteWorkout, addExercise })(WorkoutContainer) 