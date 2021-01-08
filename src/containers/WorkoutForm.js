import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWorkout } from '../actions/workouts' //need to hit reducer, adding to props
import DatePicker from 'react-date-picker'

class WorkoutForm extends Component {
    //need global and local state so we can have controlled form

    //local state
    state = {
        title: "",
        duration: "",
        date: new Date()
    }
//when were working with local state and we want to  change that state and we arent using hooks wwe all set state
    // handleInputChange = (event) => {
    //     console.log(event.target.value)
    
    //     const name = event.target.name;
    //     const value = event.target.value

    //     this.setState({
    //         [name]: value,
    //     })
    // }

    handleTitleInputChange = (event) => {
        console.log(event.target.value)
  
        this.setState({
            title: event.target.value
        })
    }

    handleDurationInputChange = (event) => {
        console.log(event.target.value)
  
        this.setState({
            duration: event.target.value
        })
    }

    handleDateInputChange = (event) => {
        debugger
        console.log(event)
  
        this.setState({
            date: event
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        //grabbing from state
        const workout = { 
            title: this.state.title, 
            duration: this.state.duration, 
            date: this.state.date
        }
        //addworkout needs information... go into props and pull function and give it the
        this.props.addWorkout(workout)
        //since supressing default behavior we need to claer out the form by updateing dstate
        this.setState({
            title: "",
            duration: "",
            date: ""
        })
        console.log("handleonsumb", this.state)
      }

    render() {
        console.log("form", this.state)
        return (
            <form onSubmit={this.handleOnSubmit}>
                <p>
                    <input
                        type="text"
                        id="workout-title"
                        name="workout-title"
                        placeholder="Workout Name..."
                        onChange={this.handleTitleInputChange} 
                        value={this.state.title}
                    />
                </p>
                <p>
                    <input 
                        type="text"
                        id="workout-duration"
                        name="workout-duration"
                        placeholder="Workout Duration..."
                        onChange={this.handleDurationInputChange}
                        value={this.state.duration}
                    />
                </p>
                <p>
                <DatePicker
                    onChange={this.handleDateInputChange}
                    value={this.state.date}
                    />
                    {/* <input 
                        type="text"
                        id="workout-date"
                        name="workout-date"
                        placeholder="Workout Date..."
                        onChange={this.handleDateInputChange}
                        value={this.state.date}
                    /> */}
                </p>
                <input type="submit" />
            </form>
        )
    }
}

export default connect(null, { addWorkout })(WorkoutForm)

//mapsttate to props pull something from state
//null skipping mapstatetoprops
