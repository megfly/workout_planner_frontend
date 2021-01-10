// import React, { useState } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// //https://react-redux.js.org/api/hooks useSelector
// import { useSelector } from 'react-redux'
// //const result: any = useSelector(selector: Function, equalityFn?: Function)
// import WorkoutDisplay from './WorkoutDisplay'


// export default function CalendarDisplay(props) {
//     //set the states of calendar date
//     const [calDate, clickedDate] = useState(new Date());
//     const workoutResults = useSelector(state => state.workoutReducer.workouts)
//      // set states of results (initialized with results from store)
//     const [resultArr, setResultArr] = useState(workoutResults)
//     console.log("CAL DISPLAY", workoutResults)

//     //change the date when its clicked
//     function onChange() {
//         clickedDate(calDate)

//         //filter the results per date and have it show only the data form those dates

//             const filteredWorkouts = workoutResults.filter(workout => {
//                 //this keeps getting the same date
//                 console.log(workout)
//                 const newResultFormat = new Date(workout.attributes.date).toLocaleString().split(",")[0]
//                 const newCalDateFormat = calDate.toLocaleString().split(",")[0]
//                 //toISOString().split('T')[0];
//                 //toLocaleDateString().split('/').reverse()
//                 // toLocaleString().split('/').reverse().join('/')
//                 // toISOString().slice(0,10);
//                 // toISOString().split('T')[0];
                
//                 console.log("newcaldateformat", newCalDateFormat)
//                 console.log("newresultformat", newResultFormat)
//                 //console.log("ex", workout.attributes.date)

//                 return newResultFormat === newCalDateFormat
//             })

//             console.log("FILTERED RESULTS:", filteredWorkouts)
//             setResultArr(filteredWorkouts)   

//             if (filteredWorkouts.length) 
//             return (
//                 <div>
//                     <Calendar
//                         onChange={onChange}
//                         value={calDate}
//                     />
//                     {resultArr.map(workout => 
//                         <WorkoutDisplay 
//                             key={workout.id} 
//                             title={workout.attributes.title}
//                             duration={workout.attributes.duration}
//                             date={workout.attributes.date}
//                         />)}
        
//                 </div>
//             )    
//     }

    //console.log(resultArr.attributes.date === this.state.date)
//////////////////////////////////////////////////////////////////////////////////
    //if the clicked date === workout.attributes.date

    // if (resultArr.length) {
    //     return (
    //         <div>
    //             <Calendar
    //                 onChange={onChange}
    //                 value={date}
    //             />
    //             {resultArr.map(workout => 
    //                 <WorkoutDisplay 
    //                     key={workout.id} 
    //                     title={workout.attributes.title}
    //                     duration={workout.attributes.duration}
    //                     date={workout.attributes.date}
    //                 />)}
    
    //         </div>
    //     )
    // }

   
//     return (
//         <div>
//             <Calendar
//                 onChange={onChange}
//                 value={calDate}
//             />
//             <h3>No Workouts on this date</h3>
//         </div>
//     )


//  }







import React, { Component } from 'react'
import Calendar from 'react-calendar'
import { connect } from 'react-redux'
import WorkoutDisplay from './WorkoutDisplay'

class CalendarDisplay extends Component {

    state = {
        date: new Date()
    }

    ////////////////the state is behind the click one date
    onSelect = (event) => {
        console.log("this is the date", event)
        let currentDate = event

        //date clicked
        this.setState({
            date: currentDate
        })

        //match the calendar state date with this.props.workouts.attributes.date
        let calendarClick = this.state 
        console.log("this is state", this.state)
        
   
        //filter data per date clicked?

        console.log("this is props", this.props.workouts)
       // console.log("this is workoutresults", workoutResults)

    }

    render() {

    const workoutResults = this.props.workouts.map((workout, index) => {
        return <WorkoutDisplay 
          key={workout.id}
          title={workout.attributes.title}
          duration={workout.attributes.duration}
          date={workout.attributes.date}
        />
    })

        return (
            <div>
                <Calendar
                    onChange={this.onSelect}
                    value={this.state.date}
                /> 
                {workoutResults}
            </div>
        )
    }
}

//shop at teh state store and 
//structure what our props look like
const mapStateToProps = state => {
    //debugger 
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps)(CalendarDisplay)

