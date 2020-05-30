import React, { Component } from "react";
import { Card, CardBody, Row, Container, Form, Button } from "reactstrap";
import '../styles/Login.css'
export default class Login extends React.Component {
  render() {
    return (
      <div>
        <form className="login">
          <label for="email">Email</label>
          <input type="text" id="email" name="email"></input>
          <label for="password">Password</label>
          <input type="password" id="password" name="password"></input>
          <input type="submit" value="Log In"></input>
          <input type=""></input>
        </form>

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
                      <label for="inputEmail">Email address</label>
                    </div>

                    <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <label for="inputPassword">Password</label>
                    </div>

                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                      <label className="custom-control-label" for="customCheck1">Remember password</label>
                    </div>

                    <Button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign in</Button>
                    <hr class="my-4"></hr>
                    <Button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i className="fab fa-google mr-2"></i> Sign in with Google</Button>
                    <Button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i className="fab fa-facebook-f mr-2"></i> Sign in with Facebook</Button>

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
