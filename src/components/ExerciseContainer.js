//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getExercises } from '../actions/exercises'

class ExerciseContainer extends Component {
  //never arrow fct for performace

  render() {

    const exercises = this.props.exercises.map((exer, index) => {
      return <li key={index}>{exercises.name}</li>
    })

    return (
      <div className="Exercises">
          <ul>{ this.props.loading ? <h3>Loading...</h3> : exercises }</ul>
      </div>
    )
  }
}
//shop at teh state store and 
//structure what our props look like
const mapStateToProps = state => {
  console.log(state)
  return {
    exercises: state.exerciseReducer.exercises,
    loading: state.exerciseReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps, { getExercises })(ExerciseContainer)