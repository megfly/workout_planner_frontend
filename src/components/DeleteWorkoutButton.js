import React from 'react'
import { Button } from 'react-bootstrap';

const DeleteWorkoutButton = ({ id, handleDeleteWorkout }) => {
    //debugger 
    return (
        <Button
            workout_id={id}
            type="button"
            className="btn btn-danger"
            variant="primary"
            id={id}
            onClick={handleDeleteWorkout}
                > Delete
        </Button>
    )
}

export default DeleteWorkoutButton