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
import ExerciseDisplay from './components/ExerciseDisplay';



class App extends Component {

  render() {

    return (
      <Router>
      <div className="App"> 
        <header className="App-header">
          <NavBar />
        </header>
          <Switch>
    <Route exact path="/" component={CalendarDisplay} />
    <Route exact path="/workouts" component={WorkoutContainer} />
    <Route exact path="/exercises" component={ExerciseContainer} />
    <Route exact path="/workouts/new" component={WorkoutForm} />
    <Route exact path="/workouts/:id/exercises/new" component={ExerciseForm} />
    <Route exact path="/workouts/:id/exercises" component={ExerciseContainer}/>
    {/*  */}
    {/* <Route exact path="/workouts/:id/exercises" component={ExerciseShow} /> */}
          </Switch>
      </div>
      </Router>
    )
  }
}


export default (App)
