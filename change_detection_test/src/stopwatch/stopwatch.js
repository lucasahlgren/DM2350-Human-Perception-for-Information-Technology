import React, { Component } from 'react';
import './stopwatch.css';
import stopwatch from '../assets/big-stopwatch.svg'

export default class Stopwatch extends Component {
  render() {
    return (
      <div className="col-12 card p-2 mb-3">
      <div className="stopwatch">
        <div className="row">
          <div className="col-4">
            <img className="p-1" src={stopwatch}></img>
          </div>
          <div className="col-8">
            <h5 className="mb-3 p-0 card-header info-color"><strong>Time remaining</strong></h5>
            <h4>{this.props.time} seconds</h4>
          </div>
        </div>
        </div>
      </div>
    )
  }
}
