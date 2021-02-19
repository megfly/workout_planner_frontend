import React, { Component } from 'react'
import { connect } from 'react-redux'
import DatePicker from 'react-date-picker'
import { editWorkout } from '../actions/workouts' 
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Button } from 'react-bootstrap';

class EditWorkoutForm extends Component {
    //need global and local state so we can have controlled form

    //local state
    state = {
        title: "",
        duration: "",
        date: new Date()
    }

    handleTitleInputChange = (event) => {
  
        this.setState({
            title: event.target.value
        })
    }

    handleDurationInputChange = (event) => {
  
        this.setState({
            duration: event.target.value
        })
    }

    handleDateInputChange = (event) => {
  console.log(event)
        this.setState({
            date: event
        })
    }

    handleOnSubmit = (event) => {
       // event.preventDefault()

        const workout = { 
            title: this.state.title, 
            duration: this.state.duration, 
            date: this.state.date,
        }

        const workout_id = this.props.match.params.id 
        //debugger 

        //edit
        //addworkout needs information... go into props and pull function and give it the
        this.props.editWorkout(workout, workout_id)

   
    }

    render() {
      //  debugger 
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}><br />
                    <h2>Edit Workout</h2><br />
                        <Link to={`/workouts`}>
                            <Button>Back</Button>
                        </Link>
                        <br />
                        <br />
                        <input 
                             onChange={this.handleTitleInputChange} 
                             placeholder="Workout Title..."
                             value={this.state.title}
                        /> <br /> <br />
                        <input 
                             onChange={this.handleDurationInputChange} 
                             placeholder="Workout Duration..."
                             value={this.state.duration}
                        /> <br /> <br />
                        <DatePicker
                            onChange={this.handleDateInputChange}
                            value={this.state.date}
                        /> <br />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state)
    return {
      workouts: state.workoutReducer.workouts, //found in reducer
      loading: state.workoutReducer.loading,
      //loading flag when we havent got our data yet
    }
  }

export default connect(mapStateToProps, { editWorkout })(EditWorkoutForm)