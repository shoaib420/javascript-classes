import React, { Component } from 'react'

export default class count extends Component {

    constructor(){
        super();
        this.state = {
            name : "hello js ",
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
            class components
         </h1>
      {this.state.name}
      <h1>
        {this.state.count}
      </h1>
      
      <button onClick={()=>{this.increment()}}>
      +
      </button>
      
      </div>
    )
  }
}
