import React, { Component } from 'react'
import GameScreen1 from '../gameScreens/gameScreen1/gameScreen1';
import GameScreen2 from '../gameScreens/gameScreen2/gameScreen2';
import GameScreen3 from '../gameScreens/gameScreen3/gameScreen3';
import GameScreen4 from '../gameScreens/gameScreen4/gameScreen4';
import GameScreen5 from '../gameScreens/gameScreen5/gameScreen5';

export default class GameController extends Component {
    constructor(props) {
        super(props)
        this.state = { exercise: 0, results: {}, gameFinished: false }
        this.changeStage = this.changeStage.bind(this)
        this.saveResult = this.saveResult.bind(this)
        this.startGame = this.startGame.bind(this)
    }

    componentDidMount() {
        this.startGame()
    }


    startGame() {
        const currentExercise = this.state.exercise;
        this.setState({ exercise: currentExercise + 1 })
    }

    saveResult(result, time, test) {
        console.log("Answer:" + result + " Reaction time: " + time)
        const resultObj = this.state.results
        const exercise = this.state.exercise
        const gameResults = {}
        gameResults["answer"] = result
        gameResults["time"] = time
        gameResults["test"] = test
        resultObj[exercise] = gameResults
        this.setState({ results: resultObj })
        console.log(this.state.results)
    }

    changeStage() {
        const currentExercise = this.state.exercise;
        if (currentExercise === 5) {
            this.setState({ exercise: 0, gameFinished: true })
            console.log("Sending results")
            const results = this.state.results
            results["test"] = this.state.test
            this.props.saveResult(results)
            this.props.changeStage()
        }
        else {
            this.setState({ exercise: currentExercise + 1 })
        }
    }

    render() {

        if (this.state.exercise === 0) {
            this.currentScreen = null
        }

        else if (this.state.exercise === 1) {
            this.currentScreen = <GameScreen1 appStage={this.props.appStage} exercise={this.state.exercise} changeStage={this.changeStage} saveResult={this.saveResult} />
        }
        else if (this.state.exercise === 2) {
            this.currentScreen = <GameScreen2 appStage={this.props.appStage} exercise={this.state.exercise} changeStage={this.changeStage} saveResult={this.saveResult} />
        }
        else if (this.state.exercise === 3) {
            this.currentScreen = <GameScreen3  appStage={this.props.appStage} exercise={this.state.exercise} changeStage={this.changeStage} saveResult={this.saveResult} />
        }
        else if (this.state.exercise === 4) {
            this.currentScreen = <GameScreen4 appStage={this.props.appStage} exercise={this.state.exercise} changeStage={this.changeStage} saveResult={this.saveResult} />
        }
        else if (this.state.exercise === 5) {
            this.currentScreen = <GameScreen5 appStage={this.props.appStage} exercise={this.state.exercise} changeStage={this.changeStage} saveResult={this.saveResult} />
        }

        return (

            this.currentScreen
        )
    }
}
