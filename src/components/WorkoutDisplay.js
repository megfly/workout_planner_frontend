import React from 'react'
import { Button } from 'react-bootstrap';
import AddExerciseButton from './AddExerciseButton';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export default function WorkoutDisplay(props) {

console.log("props is", props)
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

     
           <Button 
                workout_id={props.id}
                type="button"
                className="btn btn-danger"
                variant="primary"
                id={props.id}

                onClick={props.handleDeleteWorkout}
                
                >Delete
           </Button> 

            </ul>
        </div>
    )
}
