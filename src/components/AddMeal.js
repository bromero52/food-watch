import React from "react";
import { Container, Form, Button } from "reactstrap";
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
      <Form>
        <h1 className="form-header">Add a meal</h1>

        <Typeahead
        {...this.state}
        id="basic-example"
        onChange={selected => this.setState({ selected })}
        options={options}
        placeholder="What did you eat?"
      />

        <div className="input-group mb-3">
          <input type="time"></input>
        </div>

        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text">With textarea</span>
          </div>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>

        <Button type="submit" className="btn btn-primary">
          Submit
        </Button>
      </Form>
    );
  }
}

export default AddMeal;










