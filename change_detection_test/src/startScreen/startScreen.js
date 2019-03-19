import React, { Component } from 'react';
import './startScreen.css';

export default class StartScreen extends Component {
    render() {
        return (
            <div className="startScreen container h-100">
                <div className="gameInformation col-lg-9 col-md-12 mx-auto p-5">
                    <p><i><strong>This is a change detection test, were we will test your visual short-term memory (VSTM).
                        This is a part of a study in human perception, 
                        your answers in this test will be anonymous.</strong></i>
                    </p>
                    <p>
                        In this test, you will see a pair of layouts from multiple different websites. 
                        The first layout is visible for 20 seconds,
                        then a masking screen will appear for one second before the second layout is displayed.
                        Then your task is to spot the difference between them and do so by answering a multiple choice question.
                        You will get more detailed instructions before each exercise. 
                        The test consists of 5 exercises in total which takes approximately 5-10 minutes to finish.
                    </p>
                    <h4>Good luck!</h4>
                    <br></br>
                    <div className="startButton text-center"><button onClick={this.props.changeState} className="btn btn-danger btn-rounded btn-lg mx-auto">Start the test!</button></div>
                </div>   
            </div>
        )
    }
}
