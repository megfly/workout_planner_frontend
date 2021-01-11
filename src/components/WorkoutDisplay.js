import React from 'react'
import { Button } from 'react-bootstrap';
import AddExerciseButton from './AddExerciseButton';

//import ExerciseForm from '../containers/ExerciseForm'

// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";

export default function WorkoutDisplay(props) {
    //{ addExercise } 
    //console.log("props is workoutdisplay", props)
//debugger
    // handleClick = (event) => {
    //     this
    // }
//    debugger
console.log("props is", props)
    return ( 

        <div className="workout-display">
            {/* <li>{props}</li> */}
            <ul>
           <h4>{props.title}</h4>
           {props.duration} {props.date}

           <AddExerciseButton 
                workoutId={props.id}
                type="button"
                handleAddExercise={props.handleAddExercise}
                // onClick={() => props.handleAddExercise(props.workoutId)}
                addExercise={props.triggerAddExerciseState} />

     
           <Button 
                type="button"
                className="btn btn-danger"
                variant="primary"
                id={props.id}

                onClick={() => props.handleDeleteWorkout(props.id)}

                // onClick={() => addExercise(props.id)}
                
                >Delete
           </Button> 

            </ul>
        </div>
    )
}
