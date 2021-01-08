//working with redux in this component, making it class based
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { getWorkouts } from '../actions/workouts'
import WorkoutDisplay from '../components/WorkoutDisplay'

class WorkoutContainer extends Component {
  //never arrow fct for performace
  componentDidMount(){
      this.props.getWorkouts()
  }

  render() {
    console.log("workout container props is", this.props)
 //debugger 
    const workoutList = this.props.workouts.map((workout, index) => {
        return <WorkoutDisplay 
          // key={workout.id}
          key={index}
          title={workout.attributes.title}
          duration={workout.attributes.duration}
          date={workout.attributes.date}
        />
        // <li key={index}>{workout.attributes.title}</li>
        
    })
     

    return (
      <div className="Workouts">
          {/* <WorkoutDisplay workoutList={workoutList} /> */}
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

export default connect(mapStateToProps, { getWorkouts })(WorkoutContainer) //connecting a comp gives dispatch