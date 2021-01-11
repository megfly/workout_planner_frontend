import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExercise } from '../actions/exercises' //need to hit reducer, adding to props

class ExerciseForm extends Component {
        //local state
    state = {
        name: "",
        sets: "",
        reps: "",
        weight: ""
    } 

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleSetsChange = (event) => {
        this.setState({
            sets: event.target.value
        })
    }

    handleRepsChange = (event) => {
        this.setState({
            reps: event.target.value
        })
    }

    handleWeightChange = (event) => {
        this.setState({
            weight: event.target.value
        })
    }


    render() {
        debugger
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                <p>
                    <input
                        type="text"
                        id="exercise-name"
                        name="exercise-name"
                        placeholder="Exercise Name..."
                        onChange={this.handleNameChange} 
                        value={this.state.name}
                    />
                </p>
                <p>
                <input
                        type="text"
                        id="exercise-sets"
                        name="exercise-sets"
                        placeholder="Exercise Sets..."
                        onChange={this.handleSetsChange} 
                        value={this.state.sets}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        id="exercise-reps"
                        name="exercise-reps"
                        placeholder="Exercise Reps..."
                        onChange={this.handleRepsChange} 
                        value={this.state.reps}
                    />
                </p>
                <p>
                <input
                        type="text"
                        id="exercise-weight"
                        name="exercise-weight"
                        placeholder="Exercise Weight..."
                        onChange={this.handleWeightChange} 
                        value={this.state.weight}
                    />
                </p>
                <input type="submit" />
            </form>
                
            </div>
        )
    }
}

export default connect(null, { addExercise })(ExerciseForm)
