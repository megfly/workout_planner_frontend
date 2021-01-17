import React from 'react'
import { Button } from 'react-bootstrap';
import AddExerciseButton from './AddExerciseButton';
import DeleteWorkoutButton from './DeleteWorkoutButton'
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function WorkoutDisplay(props) {
//debugger 
//console.log("props is", props)
    return ( 

        <div className="workout-display">
        
        <ul>
        <Link to={`/workouts/${props.workout_id}/exercises/`}>
           <h4>{props.title}</h4>
        </ Link>

           <h5> {props.duration} <p> {props.date} </p> </h5>

           <AddExerciseButton 
                workout_id={props.id}
                type="button"
                handleAddExercise={props.handleAddExercise}
            />
     
           <DeleteWorkoutButton 
                workout_id={props.id}
                type="button"
                id={props.id}
                handleDeleteWorkout={props.handleDeleteWorkout}
                //onClick={props.handleDeleteWorkout}
                />

            </ul>
        </div>
    )
}
