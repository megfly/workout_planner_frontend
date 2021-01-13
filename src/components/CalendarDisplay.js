import React, { Component } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux'
import WorkoutDisplay from './WorkoutDisplay'

class CalendarDisplay extends Component {

    state = {
        date: new Date()
    }

    onSelect = (event) => {
        console.log("this is the date", event)
        let currentDate = event

        //date clicked
        this.setState({
            date: currentDate
        })

        //match the calendar state date with this.props.workouts.attributes.date
        let calendarClick = this.state 

        //calendarClick === event 
        console.log("this is state", this.state)
        
   
        //filter the results per date and have it show only the data form those dates

        console.log("this is props", this.props.workouts)
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

    if (workoutResults) {
            return (
                <div>
                    <Calendar
                        onChange={this.onSelect}
                        value={this.state.date}
                    />
                    {/* {workoutResults} */}
                    </div>
            )
        }


        return (
            <div>
                <Calendar
                    onChange={this.onSelect}
                    value={this.state.date}
                /> 
                <h3>No Workouts on this date</h3>
            </div>
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

export default connect(mapStateToProps)(CalendarDisplay)

