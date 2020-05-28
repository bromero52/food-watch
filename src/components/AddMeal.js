import React from "react";
import { Container, Form, Button } from "reactstrap";
import { Typeahead } from 'react-bootstrap-typeahead'

class AddMeal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      time: null,
      ingredients: [],
      mealSearch: ['Chicken, Milk']
    };
  }
  render() {
    return (
      <Form>
        <h1>Add a meal:</h1>

        <p>{this.props.color}</p>

        <div className="input-group mb-3">
          <input type="search" id="form-autocomplete" class="form-control mdb-autocomplete"></input>
          <button class="mdb-autocomplete-clear"> </button>
          <label for="form-autocomplete" class="active">What is your favorite US state?</label>
        </div>

        <Typeahead
          {...this.state}
          id="basic-example"
          onChange={selected => this.setState({ selected })}
          options={this.mealSearch}
          placeholder="Choose a state..." />

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










