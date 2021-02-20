import React, { Component } from 'react'

 class Incrementer extends Component {
    state = {
        count: 0,
        input: ''
    } 

    handleIncrementer = (event) => {
        //convert this.state.input to a number.... 
       if (this.state.input !== '') {
        let increment = this.state.count + parseInt(this.state.input)
        
          this.setState({
              count: increment,
              input: ''
          })
        }

        else {
            let increment = this.state.count + 1 

            this.setState({
                count: increment,
                input: ''
            })
        }
    }


        handleDecrementer = (event) => {
            // We want it to decrement the count IF the count is > 0
            
           if (this.state.count > 0) {
               //if input is not equal to an empty string
               
                if (this.state.input !== '') {
                     
                    //so when the count is equal to a number we can decrement it to below zero....
                    let decrement = this.state.count - parseInt(this.state.input)

                        if (decrement <= 0) {
                            this.setState({
                                count: 0,
                                input: ''
                            })
                        }

                        else {

                    this.setState({
                        count: decrement,
                        input: ''
                    })
                }
                
            }


                else {
                    let decrement = this.state.count - 1

                    this.setState({
                        count: decrement,
                        input: ''
                    })
                }
           }
        }

        handleNumberInput = (event) => {
            //only numbers allowed in number input 
            let re = /^[0-9\b]+$/;

            // if value is not blank, then test the regex
            if (event.target.value === '' || re.test(event.target.value)) {
                this.setState({
                    input: event.target.value
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

                <input 
                    value={this.state.input}
                    placeholder="enter number"
                    onChange={this.handleNumberInput}
                />

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
