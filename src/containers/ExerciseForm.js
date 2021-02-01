import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addExercise } from '../actions/exercises' //need to hit reducer, adding to props
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
  import { Button, Form } from 'react-bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

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
        event.preventDefault();

        const workout_id = this.props.match.params.id 

        const exercise = { 
            name: this.state.name,
            sets: this.state.sets,
            reps: this.state.reps,
            weight: this.state.weight,
        }
        //addExercise needs information... go into props and pull function and give it the
        this.props.addExercise(exercise, workout_id)

        //since supressing default behavior we need to claer out the form by updateing dstate
        this.setState({
            name: "",
            sets: "",
            reps: "",
            weight: "",
        })
      }


    render() {
     
     const workout_id = this.props.match.params.id 
        return (
            <div>
                <br />
                <h2>New Exercise!</h2>
                <Link to={`/workouts/${workout_id}/exercises`}>
                <Button>See exercises</Button>
                </Link>
                <br />
                < br />
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
                        placeholder="Exercise Weight (lbs)..."
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

//The connect() function connects a React component to a Redux store.