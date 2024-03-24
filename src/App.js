import React, { Component } from 'react';
import './App.css'
import Employees from './components/Employees';

class Apps extends Component {
  constructor() {
    super();
    this.state = { data: 'Nelly' }/*{ data:1 } */
  }

  updateState() {
    this.setState({ data: 'Teacher' })/*({ data:this.state.data+1}) */
  }


  render() {
    return (
      <div className='App'>
        <h1></h1>
        <Employees name="Harry" />
        <h1>{this.state.data} </h1>
        <button onClick={() => { this.updateState() }}>Update Date</button>

      </div>
    )
  }
}

export default Apps;