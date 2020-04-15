import React, { Component } from 'react'
import '../styles/About.css'
export default class About extends Component {
    render() {
        return (
            <div className="about-container">
                <h1 className="lg-title"> About Food Watch </h1>

                <p className="sm-txt">
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
                    This project was created mainly as a side project to 
                    learn how the MERN stack operates. The source code can 
                    be viewed on my <a className="link" href="https://github.com/bromero1/food-watch" >GitHub</a>.
                    
                </p>
            </div>
        )
    }
}
