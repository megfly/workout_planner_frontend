import React, { Component } from 'react'

 class Incrementer extends Component {
// setup local state in order to change the count value
    state = {
        count: 0
    } 

    handleIncrementer = (event) => {
        //debugger
          //increment the counter here
          //originally had this.state and it returned object object 
          //because it was the whole state
          let increment = this.state.count + 1
         // console.log(increment)
          
          //console.log("this is the event", event.target.value)
          //set the state so its the new count
          this.setState({
              count: increment
          })
        }
    render() {

        return (
            <div>
                <button 
                    type="button"
                    // setup an event handler when user clicks the button
                    onClick={this.handleIncrementer}
                   value={this.state.count}
                >
                    Increment
                </button>
                Count: {this.state.count}

            </div>
        )
    }
}

export default Incrementer
