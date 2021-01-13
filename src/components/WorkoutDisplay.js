import React from 'react'
import { Button } from 'react-bootstrap';
import AddExerciseButton from './AddExerciseButton';

export default function WorkoutDisplay(props) {

console.log("props is", props)
    return ( 

        <div className="workout-display">
        
        <ul>
           <h4>{props.title}</h4>
           {props.duration} {props.date}

           <AddExerciseButton 
                workoutId={props.id}
                // id={}
                type="button"
                handleAddExercise={props.handleAddExercise}
                onClick={() => props.handleDeleteExercise(props.workoutId)}
                />

     
           <Button 
                workoutId={props.id}
                type="button"
                className="btn btn-danger"
                variant="primary"
                id={props.id}

                onClick={() => props.handleDeleteWorkout(props.id, props.workoutId)}

                // onClick={() => addExercise(props.id)}
                
                >Delete
           </Button> 

            </ul>
        </div>
    )
}
