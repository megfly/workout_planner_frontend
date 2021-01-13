import React from 'react'
import { Button } from 'react-bootstrap';

export default function ExerciseDisplay(props) {
 // debugger 
    return (
        <div className="exercises">
            {props.name} - sets: {props.sets} - Reps: {props.reps} - Weight: {props.weight}

            <Button 
                type="button"
                className="btn btn-danger"
                variant="primary"
                id={props.id}
                workoutId={props.workoutId}

                onClick={() => props.handleDeleteExercise(props.workoutId, props.id)}
                > X
           </Button> 
        </div>
    )
}
