import React, { Component } from 'react';
import './App.css'
import Employees from './components/Employees';
import Students from './functional/Students';

class Apps extends Component {
  constructor() {
    super();
    this.state = { data: 'Nelly' }/*{ data:1 } */ /*initial state*/
    this.state = {
      statechange1: 'Our initial state',
      statechange2: 4

    }
  }

  updateState() {
    this.setState({ data: 'Teacher' })/*({ data:this.state.data+1}) */ /* change state in React*/
  }

  //Update multiple state changeState 2

  ChangeState2 = () => {
    this.setState({
      statechange1: this.state.statechange1 + 'A',
      statechange2: this.state.statechange2 + 1,
    }

    )               /*({statechange1: 'New State'})*/
  }

  /* Updating multiple state at the same */
  ChangeState = () => {
    this.setState({
      statechange2: this.state.statechange2 + 1,
      statechange1: this.state.statechange1 + 'A'
    }

    )               /*({statechange1: 'New State'})*/
  }


  render() {
    return (
      <div className='App'>
        <h1></h1>
        <Employees name="Harry" />
        <Students answer="I am student" number={25} />

        <h1>{this.state.data} </h1>
        <button onClick={() => { this.updateState() }}>Update State</button>
        <br />

        <h1>{this.state.statechange1}</h1>
        <button onClick={() => this.ChangeState2()}>Initial State</button>
        <br />


        <button onClick={() => this.ChangeState()}>Change State</button>
        {this.state.statechange2}
        <br />


      </div>
    )
  }
}

export default Apps;