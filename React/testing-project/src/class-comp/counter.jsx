import React, { Component } from 'react'

export default class counter extends Component {

    constructor(){
        super()
        this.state = {
            name : "hello react js Hooks",
            count : 0

        }
       
    }
    increment(){
        this.setState({count : this.state.count + 1})
    }
  render() {
    return (
      <div>
        <h1>
            {this.state.name}
            {this.state.count}
        </h1>
        <button onClick={this.increment.bind(this)}>
            click me 
        </button>

      </div>
    )
  }
}
