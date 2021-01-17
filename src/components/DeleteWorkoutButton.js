import React from 'react'
import { Button } from 'react-bootstrap';

const DeleteWorkoutButton = props => {
    //debugger 
    return (
        <Button
            workout_id={props.id}
            type="button"
            className="btn btn-danger"
            variant="primary"
            id={props.id}
            onClick={props.handleDeleteWorkout}
                > Delete
        </Button>
    )
}

export default DeleteWorkoutButton