import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//https://react-redux.js.org/api/hooks useSelector
import { useSelector } from 'react-redux'
//const result: any = useSelector(selector: Function, equalityFn?: Function)
import WorkoutDisplay from './WorkoutDisplay'


export default function CalendarDisplay(props) {
//console.log("calendar display props", props)
    //set the states of calendar date
    const [date, clickedDate] = useState(new Date());
    //console.log(date)
    //console.log(clickedDate)

    const workoutResults = useSelector(state => state.workoutReducer.workouts)
    console.log("CAL DISPLAY", workoutResults)

    //change the date when its clicked
    function onChange() {
        clickedDate(date)
        console.log("in the function", date)
        console.log("in the function", clickedDate)

        //filter the results per date and have it show only the data form those dates

        const filteredWorkouts = workoutResults.filter(workout => {
            //debugger
            //return workout.attributes 
           
                return <WorkoutDisplay 
                  key={workout.id}
                  //key={index}
                  title={workout.attributes.title}
                  duration={workout.attributes.duration}
                  date={workout.attributes.date}
                />
                // <li key={index}>{workout.attributes.title}</li>
            })
        
        console.log("FILTERED RESULTS:", filteredWorkouts)
        //setResultArr(filteredResults)
    }

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
            />
        </div>
    )
}
