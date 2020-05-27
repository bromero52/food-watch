import React from 'react'

class AddMeal extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        time: null,
        
      }
    }
    render() {
      return(
        <div>
          <h1>{this.props.name}</h1>
          <p>
            {this.props.color}
          </p>
        </div>
      );
    }
  }