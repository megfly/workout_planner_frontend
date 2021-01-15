import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const AddExerciseButton = props => {
  //debugger
    return (
    <Link to={`/workouts/${props.workout_id}/exercises/new`}>
      <button
        workout_id={props.workout_id}
        // onClick={() => props.handleAddExercise(props.workout_id)}
      > Add Exercise</button>
    </Link>
    )
}

export default AddExerciseButton

