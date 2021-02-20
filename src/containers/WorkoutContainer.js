//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts, deleteWorkout } from '../actions/workouts'
import { addExercise } from '../actions/exercises'
import WorkoutDisplay from '../components/WorkoutDisplay'
//import { dispatch } from 'redux'
//import CalendarDisplay from '../components/CalendarDisplay'

class WorkoutContainer extends Component {
  //never arrow fct for performace

  //assigning local state
  state = {
    sorted: false, 
    searchinput: ''
    // workouts: []
  }

  componentDidMount(){
      // store.dispatch(getWorkouts())
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
      //`Array.prototype.sort()` is destructive..... want to use spread operator to make copy of workouts array and then sorting it
    let workoutsCopy = [...this.filterWorkouts()];
    workoutsCopy.sort(this.compareWorkouts())
    return workoutsCopy;
  }else{
    return this.filterWorkouts()
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

handleSearch = (event) => {
// debugger

  this.setState({
    searchinput: event.target.value
  })
}

filterWorkouts = () => {
  // debugger 
  //console.log("searchworkouts")
  
  if (this.state.searchinput !== '') {
    
    return this.props.workouts.filter(wo => { 
      return wo.attributes.title.toUpperCase().includes(this.state.searchinput.toUpperCase())
    })

  } else {
    return this.props.workouts
  }
}

  render() {
//`render()` determines what gets displayed, based on props and state
// render is a lifecycle method of react. return is just pure javascript for returning output. 
 

    
    // debugger 
 
    return (
      <div className="Workouts">

        <br />
        <input
          type="text"
          name="workout-title"
          placeholder="Search..."
          onChange={this.handleSearch} 
          value={this.state.searchinput}
          />
        <br />
        <br />
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
          <br />
       
             { this.sortWorkouts().map(wo => {
               return <WorkoutDisplay 
                  key={wo.id}
                  workout_id={wo.id}
                  id={wo.id}
                  title={wo.attributes.title}
                  duration={wo.attributes.duration}
                  date={wo.attributes.date}
                  handleDeleteWorkout={this.handleDeleteWorkout}
                />
              })
             
  }
            
      </div>   
    )
   }
}
//shop at teh state store and structure what our props look like
const mapStateToProps = state => {
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps, { getWorkouts, deleteWorkout, addExercise })(WorkoutContainer) 