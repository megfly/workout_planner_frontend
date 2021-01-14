import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import NavBar from './NavBar'
import WorkoutContainer from './containers/WorkoutContainer'
import WorkoutForm from './containers/WorkoutForm';
import CalendarDisplay from './components/CalendarDisplay'
import ExerciseContainer from './containers/ExerciseContainer';
import ExerciseForm from './containers/ExerciseForm';
import ExerciseShow from './components/ExerciseShow'

class App extends Component {

  render() {

    return (
      <Router>
      <div className="App"> 
        <header className="App-header">
          <NavBar />
        </header>
          <switch>
    <Route exact path="/" component={CalendarDisplay} />
    <Route exact path="/workouts" component={WorkoutContainer} />
    <Route exact path="/exercises" component={ExerciseContainer} />
    <Route exact path="/workouts/new" component={WorkoutForm} />
    <Route exact path="/workouts/:id/exercises/new" component={ExerciseForm} />

    ///////////////////////why is this a function?????????
    
    <Route exact path="/workouts/:id/exercises" component={ExerciseShow} />
          </switch>
      </div>
      </Router>
    )
  }
}


export default (App)
