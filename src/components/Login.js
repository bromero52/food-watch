import React, { Component } from "react";
import { Card, CardBody, Row, Container, Form, Button } from "reactstrap";
import "../styles/Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
              <Card className="card-signin my-5">
                <CardBody>
                  <h5 className="card-title text-center">Sign In</h5>

                  <Form className="form-signin">
                    <div className="form-label-group">
                      <input
                        type="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Email address"
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
                        placeholder="Password"
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
                      Sign in
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
}
