import React from 'react'
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useRouteMatch,
//     useParams
//   } from "react-router-dom";

export default function WorkoutDisplay(props) {
    //console.log("props is workoutdisplay", props)

    return (
        <div className="workout-display">
            {/* <li>{props}</li> */}
            <ul>
                {props.title} - {props.duration} - {props.date}
            </ul>
        </div>
    )
}
