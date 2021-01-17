import React from 'react'
//import { Button } from 'react-bootstrap';
import DeleteExerciseButton from './DeleteExerciseButton';

export default function ExerciseDisplay(props) {
//debugger 
//console.log(props)
    return (
        <div className="exercises">
         
            <h5>{props.name} </h5>
            <p /> 
            sets: {props.sets} - Reps: {props.reps} - Weight: {props.weight}

            <DeleteExerciseButton 
                workout_id={props.workout_id}
                id={props.id}
                handleDeleteExercise={props.handleDeleteExercise}
            />
            <br />
            <br />
        </div>
    )
}
