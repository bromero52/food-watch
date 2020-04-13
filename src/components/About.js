import React, { Component } from 'react'
import '../styles/About.css'
export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="title"> About Food Watch </h1>

                <p>
                    I'm Bryan! I created Food Watch to help me keep track of 
                    the foods that I eat. Normally, I would tabulate my food 
                    consumption on Google Notes. 
                </p>
                
                <p> 
                    This method worked, but I wanted to use the skills I have
                    learned while earning a degree in Computer Science to create
                    a clean interface for this task. 
                </p>

                <p> 
                    Building this project gives me the practice I need to develop
                    and grow my skills that are needed in software engineering that
                    weren't taught in school. I hope 
                </p>
            </div>
        )
    }
}
