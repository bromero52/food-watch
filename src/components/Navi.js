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

  render() {
    return (
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Food Watch</NavbarBrand>
        <NavbarToggler  />

        <Collapse navbar>
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
                <DropdownItem href="/meal">
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

