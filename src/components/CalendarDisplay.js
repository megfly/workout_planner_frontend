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







// import React, { Component } from 'react'
// import Calendar from 'react-calendar'
// import { connect } from 'react-redux'
// import WorkoutDisplay from './WorkoutDisplay'

// class CalendarDisplay extends Component {

//     state = {
//         date: new Date()
//     }

//     ////////////////the state is behind the click one date
//     onSelect = (event) => {
//         console.log("this is the date", event)
//         let currentDate = event

//         //date clicked
//         this.setState({
//             date: currentDate
//         })

//         //match the calendar state date with this.props.workouts.attributes.date
//         let calendarClick = this.state 

//         console.log("this is state", this.state)
         

   
//         //filter data per date clicked?

//         console.log("this is props", this.props.workouts)
//        // console.log("this is workoutresults", workoutResults)

  

//     // const filteredResults = this.props.workout.map((workout, index) => {
//     //     debugger
//     //     return <WorkoutDisplay 
//     //       key={workout.id}
//     //       title={workout.attributes.title}
//     //       duration={workout.attributes.duration}
//     //       date={workout.attributes.date}
//     //     />
//     // })
//     }

//     render() {

//     const workoutResults = this.props.workouts.map((workout, index) => {
//         return <WorkoutDisplay 
//           key={workout.id}
//           title={workout.attributes.title}
//           duration={workout.attributes.duration}
//           date={workout.attributes.date}
//         />
//     })

//         return (
//             <div>
//                 <Calendar
//                     onChange={this.onSelect}
//                     value={this.state.date}
//                 /> 
//                 {/* {workoutResults} */}
//             </div>
//         )
//     }
// }

// //shop at teh state store and 
// //structure what our props look like
// const mapStateToProps = state => {
//     //debugger 
//   return {
//     workouts: state.workoutReducer.workouts, //found in reducer
//     loading: state.workoutReducer.loading,
//     //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
//     //loading flag when we havent got our data yet
//   }
// }

// export default connect(mapStateToProps)(CalendarDisplay)

