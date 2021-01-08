import React, { Component } from 'react'
import './App.css';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WorkoutContainer from './containers/WorkoutContainer'

class App extends Component {
  //never arrow fct for performace
  state = {
    date: new Date(),
    //date: ''
  }

  handleOnChange = (event) => {
    console.log(event)
    this.setState({ 
      date: event.target
    });
  }

  render() {

    return (
      <div className="App"> 
        <header className="App-header">
          <h3>Workout Planner</h3>
        </header>
          <Calendar 
            onChange={this.handleOnChange}
            value={this.state.date}
          />
          <WorkoutContainer />
          
      </div>
    )
  }
}


export default (App)
