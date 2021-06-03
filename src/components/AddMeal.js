import React from "react";
import { Typeahead } from 'react-bootstrap-typeahead'
import options from '../assets/data.js'
import '../styles/Form.css'

class AddMeal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: null,
      ingredients: [], 
    };

    if (true) console.log('Running add meal');
  }
  render() {
    return (
      <div>

      </div>
    );
  }
}

export default AddMeal;










