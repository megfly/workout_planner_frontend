import React from 'react'

export default function WorkoutDisplay(props) {
    console.log("props is workoutdisplay", props)
    return (
        <div>
            {/* <li>{props}</li> */}
            <ul>
                {props.title}
            </ul>
        </div>
    )
}
