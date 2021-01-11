import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const AddExerciseButton = props => {
  //debugger
    return (
    <Link to={`/workouts/${props.workoutId}/exercises/new`}><button> Add Exercise</button></Link>
    )
}

export default AddExerciseButton
