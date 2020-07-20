import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap';
// import '../styles/About.css'
export default class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="title">
                            Welcome Back, name. 
                        </h1>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
