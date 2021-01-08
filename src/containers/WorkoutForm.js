import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWorkout } from '../actions/workouts' //need to hit reducer, adding to props

class WorkoutForm extends Component {
    //need global and local state so we can have controlled form

    //local state
    state = {
        title: "",
        duration: "",
        date: ""
    }
//when were working with local state and we want to  change that state and we arent using hooks wwe all set state
    handleInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
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
        //addworkout needs information... go into props and pull function and give it the workout
        this.props.addWorkout(workout)
        //since supressing default behavior we need to claer out the form by updateing dstate
        this.setState({
            title: "",
            duration: "",
            date: ""
        })
      }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <p>
                    <input
                        type="text"
                        id="workout-title"
                        placeholder="Workout Name..."
                        onChange={this.handleInputChange}
                        value={this.state.title}
                    />
                </p>
                <p>
                    <input 
                        type="text"
                        id="workout-duration"
                        placeholder="Workout Duration..."
                        onChange={this.handleInputChange}
                        value={this.state.duration}
                    />
                </p>
                <p>
                    <input 
                        type="text"
                        id="date"
                        placeholder="Workout Date..."
                        onChange={this.handleInputChange}
                        value={this.state.date}
                    />
                </p>
                <input type="submit" />
            </form>
        )
    }
}

export default connect(null, { addWorkout })(WorkoutForm)

//mapsttate to props pull something from state
//null skipping mapstatetoprops
