import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import "../styles/Nav.css";


export default class Navi extends Component {

  // isOpen is for Hamburger in navbar
  state = {
      isOpen: false 
  }

  // use arrow function to avoid binding with component (toggle is not a lifecycle method, `this` is not given to toggle unless binding)
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  
  render() {
    return (
      <div>
      <Navbar color="gold" light expand="md" className="mb-5">
        <NavbarBrand href="/">Food Watch</NavbarBrand>
        <NavbarToggler onClick = { this.toggle } />

        <Collapse isOpen={this.state.isOpen} navbar>

          <Nav className="mr-auto" navbar>

            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/about">About</NavLink>
            </NavItem>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Quick Links
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/addmeal">
                  Add Meal
                </DropdownItem>
                <DropdownItem>
                  View Meals
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            
          </Nav>
          <NavbarText>Sign Out</NavbarText>
        </Collapse>

      </Navbar>
    </div>
    )
  }
}

