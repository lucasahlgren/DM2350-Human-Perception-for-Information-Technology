import React, { Component } from 'react';
import './App.css';
import Survey from './survey/survey.js';
import GameController from './gameController/gameController.js';
import StartScreen from './startScreen/startScreen';

import Fade from "react-reveal";


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { gameFinished: false, appStage: 0 }
    this.changeStage = this.changeStage.bind(this)
    this.saveResult = this.saveResult.bind(this)
  }

  changeStage() {
    
    const currentStage = this.state.appStage
    /* Executes when game is finished */
    if (currentStage === 2) {
      this.setState({ gameFinished: true, appStage: currentStage + 1 })
    }

    /* Go back to start after the survey */
    else if(currentStage === 3){
      this.setState({gameFinished: false, appStage: 0})
    }
    else {
      this.setState({ appStage: currentStage + 1 })

    }
   
  }

  /* Saves the results from the game */
  saveResult(result) {
    console.log("Got results " + JSON.stringify(result))
    this.setState({ results: result })
  }

  render() {

    /* Game stage status */
    const currentStage = this.state.appStage;

    /* Changes the background between start screen and game screen */
    const background = currentStage === 0 ? "page_bg_on" : ""
    const greyBackground = currentStage > 0 ? "bg_grey" : ""


    /* Show game screen or the last user information surevey */
    if (currentStage === 2) {
      this.screen = <Survey result={this.state.results} changeStage={this.changeStage} />
    }
    else if (currentStage === 1) {
      this.screen = <GameController appStage={this.state.appStage} changeStage={this.changeStage} saveResult={this.saveResult} />
    }
    else if (currentStage === 0) {
      this.screen = <StartScreen changeState={this.changeStage} />
    }

    /* Prints app stage */
    console.log("AppStage: " + currentStage)

    return (
      <div className="app">
      <Fade duration={1000}>
        <div className={"contentWrapper container-fluid m-0 p-0 " + background}>
          <div className="row m-0">
            <header className="header w-100 col-12 text-center">
              <h4 className="m-0 col-12">Change Detection Test</h4>
            </header>
            <div className={"container-fluid h-100 " + greyBackground}>
              <div className="row pt-3 pb-1">
                {this.screen}
              </div>
            </div>
          </div>
        </div>
        <div className="mobileOverlay">
          <div className="container-fluid">
            <div className="row">
              <div className="message col-9 mx-auto">
                <h5>Hello! <br /><br />We are sorry, but the test is only available on larger screens for example tablets, laptops and desktops.
                  <br /><br /> Thank you for understanding.</h5>
              </div>
            </div>
          </div>
        </div>
        </Fade>
      </div>
    );
  }
}

export default App;
