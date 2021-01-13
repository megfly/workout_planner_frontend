import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExercise } from '../actions/exercises' //need to hit reducer, adding to props

class ExerciseForm extends Component {
        //local state
    state = {
        name: "",
        sets: "",
        reps: "",
        weight: "",
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

    handleOnSubmit = (event) => {
       // debugger
        event.preventDefault();

        const workoutId = this.props.match.params.id 

        const exercise = { 
            name: this.state.name,
            sets: this.state.sets,
            reps: this.state.reps,
            weight: this.state.weight,
        }
      //  debugger
        //addExercise needs information... go into props and pull function and give it the
        this.props.addExercise(exercise, workoutId)

        //since supressing default behavior we need to claer out the form by updateing dstate
        this.setState({
            name: "",
            sets: "",
            reps: "",
            weight: "",
        })
        console.log("handleonsumb", this.state)
      //  console.log(workoutId)
      }


    render() {
       // console.log("THIS ONE IS EXERCUSE FORM", this.state)
      // debugger
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
