//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <header className="App-header">
        <h3>Workout Planner</h3>
        </header>
      </div>
    )
  }
}
//shop at teh state store and 
//structure what our props look like
const mapStateToProps = state => {
  console.log(state)
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    exercises: state.exerciseReducer.exercises,
    loading: state.exerciseReducer.loading
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps)(App)
