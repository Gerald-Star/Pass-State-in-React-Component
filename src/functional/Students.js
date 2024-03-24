import React, { Component } from 'react';


class Students extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>

        {this.props.answer} {this.props.number}

      </div>
    );
  }
}



export default Students;