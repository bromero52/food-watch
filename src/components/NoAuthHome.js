import React, { Component } from 'react'
import { Jumbotron, Container } from 'reactstrap';
// import '../styles/Home.css'
export default class About extends Component {
    render() {
        return (
            <div>
                <Jumbotron>
                    <Container>
                        <h1 className="title">
                            Welcome to Food Watch! 
                        </h1>

                        <h3>
                            Our goal is simple. Helping you keep track of what
                            you eat to help you keep yourself healthy.                            
                        </h3>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
