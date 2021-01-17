import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { Button } from 'react-bootstrap';

const AddExerciseButton = props => {
  //debugger
    return (
    <Link to={`/workouts/${props.workout_id}/exercises/new`}>
      <Button
        variant="danger"
        workout_id={props.workout_id}
        // onClick={() => props.handleAddExercise(props.workout_id)}
      > Add Exercise</Button>
    </Link>
    )
}

export default AddExerciseButton

