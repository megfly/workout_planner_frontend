import React from 'react'
import { Button } from 'react-bootstrap';

export default function ExerciseDisplay(props) {
//debugger 
    return (
        <div className="exercises">
            {props.name} - sets: {props.sets} - Reps: {props.reps} - Weight: {props.weight}

            <Button 
                type="button"
                className="btn btn-danger"
                variant="primary"
                id={props.id}
                workout_id={props.workout_id}

                onClick={props.handleDeleteExercise}
 
                //onClick={() => props.handleDeleteExercise(props.workout_id, props.id)}
                > X
           </Button> 
        </div>
    )
}
