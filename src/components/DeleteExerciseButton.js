import React from 'react'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { Button } from 'react-bootstrap';

const DeleteExerciseButton = props => {

    return (
      <Button
            type="button"
            className="btn btn-danger"
            variant="primary"
            id={props.id}
            workout_id={props.workout_id}
            onClick={props.handleDeleteExercise}
      > X </Button>
 
    )
}

export default DeleteExerciseButton