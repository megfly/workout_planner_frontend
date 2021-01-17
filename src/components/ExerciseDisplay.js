import React from 'react'
import DeleteExerciseButton from './DeleteExerciseButton';

export default function ExerciseDisplay(props) {

    return (
         
        <div className="exercises">
            <p />
                <h4>{props.name} </h4>
            <p /> 
            
            <b> Sets:</b> {props.sets} 
            <b> Reps:</b> {props.reps} 
            <b> Weight:</b> {props.weight}

            {/* <DeleteExerciseButton 
                workout_id={props.workout_id}
                id={props.id}
                handleDeleteExercise={props.handleDeleteExercise}
            /> */}

                <br />
            <br />
        </div>
    )
}
