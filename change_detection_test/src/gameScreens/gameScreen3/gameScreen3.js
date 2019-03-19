import React, { Component } from 'react';


import imgCol1 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Twitter_color_1.png';
import imgCol2 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Twitter_color_2.png';
import img1 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Twitter_no_color_1.png';
import img2 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Twitter_no_color_2.png';
import noise from '../../assets/noise.jpg';

/* Multiple choice answers */

import C1 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Multiple choice answers/1.png';
import C2 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Multiple choice answers/2.png';
import C3 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Multiple choice answers/3.png';
import C4 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Multiple choice answers/4.png';
import C5 from '../../assets/screenshots/Exercise_3/Twitter/Coloured version/Multiple choice answers/5.png';

import N1 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Multiple choice answers/1.png';
import N2 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Multiple choice answers/2.png';
import N3 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Multiple choice answers/3.png';
import N4 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Multiple choice answers/4.png';
import N5 from '../../assets/screenshots/Exercise_3/Twitter/Non-coloured version/Multiple choice answers/5.png';


export default class GameScreen3 extends Component {
    constructor(props) {
        super(props)
        this.state = { instructions: true, reactionTime: 0, timeNoise: 0, time: 0, gameStarted: false, gameFinished: false, gameStage: 0, nextExercise: false, value: '' }
        this.startGame = this.startGame.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onClickStart = this.onClickStart.bind(this)
    }

    /* Runs when the component attaches to the DOM */
    onClickStart() {
        this.setState({ instructions: false })
        /* 1 second pause before game starts */
        setTimeout(this.startGame, 1000)
    }

    /* Starts the game */
    startGame() {
        this.coinFlip()
        var gameStarted = this.state.gameStarted
        if (!gameStarted) {
            this.setState({ gameStarted: true, gameStage: 1, time: 20 })
            this.clock = setInterval(this.stopwatch.bind(this), 1000)
            console.log("Game started")
        }
    }

    /* Randomizes color vs no-color */
    coinFlip() {
        const num = Math.floor(Math.random() * 2)
        if (num === 0) {
            this.setState({ test: "color" })
            console.log("Exercise " + this.props.exercise + " coin flip: color")
        } else {
            this.setState({ test: "no-color" })
            console.log("Exercise " + this.props.exercise + " coin flip: no-color")
        }
    }

    /* Updates clock and checks if game is over */
    stopwatch() {
        var currentTime = this.state.time
        var timeNoise = this.state.timeNoise

        /* Executes when time is over */
        if (currentTime === 0) {
            this.setState({ gameStage: 2, timeNoise: timeNoise + 1 })

            /* Controlls the time for the noise */
            if (timeNoise === 1) {
                this.setState({ gameStage: 3, gameFinished: true, gameStarted: false })
                clearTimeout(this.clock)

                /* Starts reaction clock */
                this.reactionClock = setInterval(this.reactionwatch.bind(this), 100)
                console.log("Reaction time starts")
            }
        }

        /* Countdown 1 s */
        else {
            this.setState({ time: currentTime - 1 })
            console.log(currentTime - 1)
        }
    }

    /* Updates reaction time */
    reactionwatch() {
        const currentReactionTime = this.state.reactionTime
        this.setState({ reactionTime: currentReactionTime + 1 })
    }

    /* Handles answers to "What changed" */
    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    /* Sends answer to App component */
    handleSubmit(event) {
        event.preventDefault()
        const choiceValue = this.state.value
        if (choiceValue === '') {
            alert("Please answer the question!")
        }
        else {
            /* Stops reaction clock */
            clearTimeout(this.reactionClock)
            const reactionTime = this.state.reactionTime / 10
            const test = this.state.test
            console.log("Total reaction time: " + reactionTime + " s")
            this.props.saveResult(choiceValue, reactionTime, test)
            this.setState({ nextExercise: true })
        }
    }

    render() {

        /* Game status */
        const test = this.state.test
        const finished = this.state.gameFinished
        const nextExercise = this.state.nextExercise
        const stage = this.state.gameStage
        const stateInstructions = this.state.instructions
        this.img = null


        /* Multiple choice answers */
        const choice1 = "Sign up"
        const choice2 = "Follow your interests"
        const choice3 = "John Twitter today"
        const choice4 = "Log in"
        const choice5 = "Phone, email or username"
        const choice6 = "No change"

        const choice1Img = test === "color" ? C1:N1
        const choice2Img = test === "color" ? C2:N2
        const choice3Img = test === "color" ? C3:N3
        const choice4Img = test === "color" ? C4:N4
        const choice5Img = test === "color" ? C5:N5 

         /* Depending on the "coin flip" which images are displayed */
         const showImg1 = test === "color" ? imgCol1 : img1
         const showImg2 = test === "color" ? imgCol2 : img2

        /* Exercise instructions */
        const instructions = "In this exercise you will see a screenshot of a real website. It will be more complex than the previous exercises but the task is the same. Try to focus on information that seem important to you."

        /* Multiple choice buttons */
        const choiceButton1 = <div className="col-12 mx-auto"><input type="radio" id="opt1" value={choice1} checked={this.state.value === choice1} onChange={this.handleChange} /><label className="col-10 pr-0" htmlFor="opt1"><img className="col-5 p-0 ml-2" src={choice1Img} alt="" /></label></div>
        const choiceButton2 = <div className="col-12 mx-auto"><input type="radio" id="opt2" value={choice2} checked={this.state.value === choice2} onChange={this.handleChange} /><label className="col-10 pr-0" htmlFor="opt2"><img className="col-11 p-0 ml-2" src={choice2Img} alt="" /></label></div>
        const choiceButton3 = <div className="col-12 mx-auto"><input type="radio" id="opt3" value={choice3} checked={this.state.value === choice3} onChange={this.handleChange} /><label className="col-10 pr-0" htmlFor="opt3"><img className="col-9 p-0 ml-2" src={choice3Img} alt="" /></label></div>
        const choiceButton4 = <div className="col-12 mx-auto"><input type="radio" id="opt4" value={choice4} checked={this.state.value === choice4} onChange={this.handleChange} /><label className="col-10 pr-0" htmlFor="opt4"><img className="col-12 p-0 ml-2" src={choice4Img} alt="" /></label></div>
        const choiceButton5 = <div className="col-12 mx-auto"><input type="radio" id="opt5" value={choice5} checked={this.state.value === choice5} onChange={this.handleChange} /><label className="col-10 pr-0" htmlFor="opt5"><img className="col-11 p-0 ml-2" src={choice5Img} alt="" /></label></div>
        const choiceButton6 = <div className="col-12 mx-auto"><input type="radio" id="opt5" value={choice6} checked={this.state.value === choice6} onChange={this.handleChange} /><label className="col-10 pr-0 ml-2" htmlFor="opt6">{choice6}</label></div>
       
          
   
           if (stage === 0) {
               this.img = null
           }
           else if (stage === 1) {
               this.img = <img className="col-12" src={showImg1} alt=""></img>
           }
           else if (stage === 2) {
   
               this.img = <img className="col-12" src={noise} alt=""></img>
           }
           else if (stage === 3) {
               this.img = <img className="col-12" src={showImg2} alt=""></img>
           }
       
    

        /* Form when game is finished */
        const form = finished ? <div className="col-12 card p-0">
            <div className="info-color card-header text-center"><h4 className="m-0">What changed?</h4></div>
            <form className="p-3 pt-4 pb-3" onSubmit={this.handleSubmit}>
                <div className="row mx-auto">
                    {choiceButton1}
                    {choiceButton2}
                    {choiceButton3}
                    {choiceButton4}
                    {choiceButton5}
                    {choiceButton6}
                </div>
                <div className="text-center">
                    <input type="submit" className="btn btn-danger btn-rounded mt-3 btn-md mx-auto" value="Submit" />
                </div>
            </form>
        </div> : null


          /* Go to next exercise button */
          if (finished && nextExercise) {
            this.button = <button onClick={this.props.changeStage} className="btn btn-danger btn-rounded btn-block m-4 mx-auto">Go to next exercise</button>
        }
        else {
            this.button = null
        }


        /* Exercise instructions */
        const exerciseInstructions = stateInstructions ? <div className="col-10">
            <div className="exerciseInstructions p-5 col-7 mx-auto">
                <p>{instructions}</p>
            </div>
            <br />
            <div className="startButton text-center">
                <button onClick={this.onClickStart} className="btn btn-danger btn-rounded btn-lg mx-auto mt-4">Start exercise</button>
            </div>
        </div> : null



        return (
            <div className="gameScreen col-lg-10 col-md-12 p-0 mx-auto">
                <div className="row">
                    <div className="exerciseTitle col-12 text-center">
                        <h3 className="m-0">{"Exercise " + this.props.exercise}</h3>
                        <br />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {exerciseInstructions}
                    <div className="col-8 p-0">
                        {this.img}
                    </div>
                    <div className="col-3">
                        {form}
                        {this.button}
                    </div>
                </div>
            </div>
        )
    }
}

