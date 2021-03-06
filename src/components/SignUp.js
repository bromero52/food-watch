import React, { Component, useState } from "react";
import { Card, CardBody, Row, Container, Form, Button } from "reactstrap";
import "../styles/Login.css";
import "whatwg-fetch";

export default function Login() {
  // useState hook for form data
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // Api endpoint for registering users
  const apiUrl = "http://localhost:8000/users/register";

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // // Spliting up fetch funtion call
  // const data = {
  //   email: email,
  //   password: password,
  // };

  function handleSubmit(event) {
    event.preventDefault();
    fetch(apiUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        firstName: firstName,
        lastName: lastName,
        password: password,
        email: email,
        // id: this.state.id,
      }),
    })
      .then((result) => result.json())
      .then((info) => {
        console.log(info);
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container>
        <Row>
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <Card className="card-signin my-5">
              <CardBody>
                <h5 className="card-title text-center">Sign Up</h5>

                {/* First name */}
                <div className="form-label-group">
                  <input
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    required
                  />
                  <label htmlFor="firstName">First Name</label>
                </div>

                {/* Last Name */}
                <div className="form-label-group">
                  <input
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    required
                  />
                  <label htmlFor="lastName">Last Name</label>
                </div>

                {/* Username */}
                <div className="form-label-group">
                  <input
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                    required
                  />
                  <label htmlFor="username">Username</label>
                </div>

                <Form onSubmit={handleSubmit} className="form-signin">
                  <div className="form-label-group">
                    <input
                      type="email"
                      id="inputEmail"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      required
                      autoFocus
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      required
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>

                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>

                  <Button
                    className="btn btn-lg btn-block text-uppercase"
                    type="submit"
                    color="primary"
                  >
                    Register
                  </Button>
                  <hr className="my-4"></hr>
                  <Button
                    className="btn-google btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google mr-2"></i> Sign in with Google
                  </Button>
                  <Button
                    className="btn btn-lg btn-facebook btn-block text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f mr-2"></i> Sign in with
                    Facebook
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </div>
  );
}
