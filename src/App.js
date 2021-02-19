import React, { Component } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar'
import WorkoutContainer from './containers/WorkoutContainer'
import WorkoutForm from './containers/WorkoutForm';
import ExerciseContainer from './containers/ExerciseContainer';
import ExerciseForm from './containers/ExerciseForm';
import CalendarContainer from './containers/CalendarContainer';
import EditWorkoutForm from './containers/EditWorkoutForm';

class App extends Component {

  render() {

    return (
      // declaritive routing for react
      <Router>
        <div className="App"> 
          <header className="App-header">
            <NavBar />
          </header>
          {/* switch looks through its children routes and renders the first one whose path matches the url */}
          {/* when it finds one, it renders that route and ignores all the others */}
            <Switch> 
              <Route exact path="/" component={CalendarContainer} />
              <Route exact path="/workouts" component={WorkoutContainer} />
              <Route exact path="/exercises" component={ExerciseContainer} />
              <Route exact path="/workouts/new" component={WorkoutForm} />
              <Route exact path="/workouts/:id/edit" component={EditWorkoutForm} />
              {/* <Route exact path="/workouts/:id" component={WorkoutContainer} /> */}
              <Route exact path="/workouts/:id/exercises/new" component={ExerciseForm} />
              <Route exact path="/workouts/:id/exercises" component={ExerciseContainer} />
            </Switch>
        </div>
      </Router>
    )
  }
}


export default (App)
