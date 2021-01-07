//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'

class WorkoutContainer extends Component {
  //never arrow fct for performace

  render() {

    const workouts = this.props.workouts.map((wo, index) => {
      return <li key={index}>{workouts.title}</li>
    })

    return (
      <div className="Workouts"> 
         <ul>{ this.props.loading ? <h3>Loading...</h3> : workouts }</ul>
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
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps)(WorkoutContainer) //connecting a comp gives dispatch