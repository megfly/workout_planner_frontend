import React from 'react'
import DeleteExerciseButton from './DeleteExerciseButton';
import { Button } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function ExerciseDisplay(props) {

    return (
         
        <div className="exercises">
            <p />
                <h4>{props.name} </h4> 
            <p /> 
            
            <b> Sets:</b> {props.sets} <br />
            <b> Reps:</b> {props.reps} <br />
            <b> Weight:</b> {props.weight} <br />
            <Link to={`/workouts`}> <Button>Back</Button></Link>

            {/* <DeleteExerciseButton 
                workout_id={props.workout_id}
                id={props.id}
                handleDeleteExercise={props.handleDeleteExercise}
            /> */}

            <br />
        </div>
    )
}
