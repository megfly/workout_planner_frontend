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

        handleDecrementer = (event) => {

           

            // We want it to decrement the count IF the count is > 0
            if (this.state.count > 0) {
                let decrement = this.state.count - 1
                this.setState({
                    count: decrement
                })
            }
            
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

                <input>
                </input>
                
                Count: {this.state.count}

                <button
                    onClick={this.handleDecrementer}
                >
                    Decrement
                </button>

            </div>
        )
    }
}

export default Incrementer
