import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux'
import { getWorkouts } from '../actions/workouts'
import Jumbotron from 'react-bootstrap/Jumbotron'

class CalendarContainer extends Component {

    state = {
        date: new Date()
    }

    componentDidMount(){
        //debugger 
          this.props.getWorkouts()
      }

    onSelect = (event) => {
        console.log("this is the date", event)
        let currentDate = event

        //date clicked
        this.setState({
            date: currentDate
        })

        console.log("this is props", this.props.workouts)
    }

    render() {

    // const workoutResults = this.props.workouts.map((workout, index) => {
    //     //debugger 
    //     return <li 
    //       key={workout.id}
    //       title={workout.attributes.title}
    //       duration={workout.attributes.duration}
    //       date={workout.attributes.date}
    //     />
    // })

//return if workoutResults date is equal to the date clicked
    // if (workoutResults.map(workout =>{
    //     //debugger 
    //     date 
    // })) {
    //     //debugger 
    //         return (
    //             <div>
    //                 <Calendar
    //                     onChange={this.onSelect}
    //                     value={this.state.date}
    //                 />
    //                 {workoutResults}
    //                 </div>
    //         )
    //     }

// return value if no workouts on this date
        return (
            <Jumbotron fluid>
              
            <div className="calendar">
                <Calendar
                    onChange={this.onSelect}
                    value={this.state.date}
                /> 
                {/* <h3>No Workouts on this date</h3> */}
            </div>
          
            </Jumbotron>
        )
    }
}

//shop at teh state store and 
//structure what our props look like
const mapStateToProps = state => {
  return {
    workouts: state.workoutReducer.workouts, //found in reducer
    loading: state.workoutReducer.loading,
    //loading is cuz fetch is async, takes time to get promise of result, so we use loading flag
    //loading flag when we havent got our data yet
  }
}

export default connect(mapStateToProps, { getWorkouts })(CalendarContainer)

