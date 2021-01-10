import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addWorkout } from '../actions/workouts' //need to hit reducer, adding to props

class ExerciseForm extends Component {
        //local state
    state = {
        name: "",
        reps: "",
        sets: "",
        weight: ""
    }

    handleChange(event){
        this.setState({
            [evenet.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <p>
                    <input
                        type="text"
                        id="exercise-name"
                        name="exercise-name"
                        placeholder="Exercise Name..."
                        onChange={this.handleChange} 
                        value={this.state.name}
                    />
                </p>
                <p>
                <input
                        type="text"
                        id="exercise-sets"
                        name="exercise-sets"
                        placeholder="Exercise Sets..."
                        onChange={this.handleChange} 
                        value={this.state.sets}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        id="exercise-reps"
                        name="exercise-reps"
                        placeholder="Exercise Reps..."
                        onChange={this.handleChange} 
                        value={this.state.reps}
                    />
                </p>
                <p>
                <input
                        type="text"
                        id="exercise-weight"
                        name="exercise-weight"
                        placeholder="Exercise Weight..."
                        onChange={this.handleChange} 
                        value={this.state.reps}
                    />
                </p>
                <input type="submit" />
            </form>
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(ExerciseForm)
