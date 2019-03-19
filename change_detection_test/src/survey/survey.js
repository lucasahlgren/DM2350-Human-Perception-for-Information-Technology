import React, { Component } from 'react';
import './survey.css';

export default class Survey extends Component {
    render() {
        console.log("Survey got results: " + JSON.stringify(this.props.result))
        return (
            <div className="survey col-md-8 col-lg-5 p-0 mb-2 card mx-auto">
                <h5 className="card-header info-color white-text text-center">
                    <strong>User information</strong>
                </h5>
                <div className="card-body px-lg-5 pt-0">
                    <form className="col-12 text-center mx-auto pt-3" action="https://docs.google.com/forms/d/e/1FAIpQLSdO4lS23pXXSkSjj_qXpFjKjyJzkaw1oBIK93Rw1Kqmw-5O2g/formResponse" target="_self" method="POST">

                        <div className="form-group text-center mx-auto pb-3 col-6">
                            <label><strong>Age</strong></label>
                            <input type="number" name="entry.759679064" className="form-control" />
                        </div>

                        <div className="form-group text-center pb-3">
                            <label><strong>Gender</strong></label>
                            <br></br>
                            <div className="row">
                                <div className="col-4 mx-auto">
                                    <label htmlFor="Male">Male</label>
                                    <br></br>
                                    <input type="radio" id="Male" name="entry.748042240" value="Male" />
                                </div>
                                <div className="col-4 mx-auto">
                                    <label htmlFor="Female">Female</label>
                                    <br></br>
                                    <input type="radio" id="Female" name="entry.748042240" value="Female" />
                                </div>
                                <div className="col-4 mx-auto">
                                    <label htmlFor="Not-say">Prefer not to say</label>
                                    <br></br>
                                    <input type="radio" id="Not-say" name="entry.748042240" value="Prefer not to say" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group text-center pb-3">
                            <label><strong>How is your vision?</strong></label>
                            <br></br>
                            <div className="row">
                                <div className="col-4 mx-auto">
                                    <label htmlFor="Normal">Normal</label>
                                    <br></br>
                                    <input type="radio" id="Normal" name="entry.789553117" value="Normal" />
                                </div>
                                <div className="col-4 mx-auto">
                                    <label htmlFor="Far-sighted">Far-sighted</label>
                                    <br></br>
                                    <input type="radio" id="Far-sighted" name="entry.789553117" value="Far-sighted" />
                                </div>
                                <div className="col-4 mx-auto">
                                    <label htmlFor="Short-sighted">Short-sighted</label>
                                    <br></br>
                                    <input type="radio" id="Short-sighted" name="entry.789553117" value="Short-sighted" />
                                </div>
                            </div>
                        </div>

                        <div className="form-group text-center pb-3">
                            <label><strong>Do you use glasses or contact lenses?</strong></label>
                            <br></br>
                            <div className="col-8 mx-auto">
                                <div className="row">
                                    <div className="col-6 mx-auto">
                                        <label htmlFor="Yes">Yes</label>
                                        <br></br>
                                        <input type="radio" id="Yes" name="entry.119019301" value="Yes" />
                                    </div>
                                    <div className="col-6 mx-auto">
                                        <label htmlFor="No">No</label>
                                        <br></br>
                                        <input type="radio" id="No" name="entry.119019301" value="No" />
                                    </div>
                                </div>
                            </div>
                        </div>


                    <div className="form-group text-center pb-3">
                            <label><strong>Do you experience color blindness?</strong></label>
                            <br></br>
                            <div className="col-12 mx-auto">
                                <div className="row">
                                    <div className="col-3 mx-auto">
                                        <label htmlFor="No">No</label>
                                        <br></br>
                                        <input type="radio" id="No" name="entry.433724197" value="No" />
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <label htmlFor="red-green">Red-green</label>
                                        <br></br>
                                        <input type="radio" id="red-green" name="entry.433724197" value="Red-green" />
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <label htmlFor="blue-green">Blue-green</label>
                                        <br></br>
                                        <input type="radio" id="blue-green" name="entry.433724197" value="Blue-green" />
                                    </div>
                                    <div className="col-3 mx-auto">
                                        <label htmlFor="totally-colorblind">Totally colorblind</label>
                                        <br></br>
                                        <input type="radio" id="totally-colorblind" name="entry.433724197" value="Totally colorblind" />
                                    </div>
                                </div>
                            </div>
                        </div>


                        
                        <div className="form-group text-center pb-3">
                            <label><strong>Do you have dyslexia?</strong></label>
                            <br></br>
                            <div className="col-8 mx-auto">
                                <div className="row">
                                    <div className="col-6 mx-auto">
                                        <label htmlFor="Yes">Yes</label>
                                        <br></br>
                                        <input type="radio" id="Yes" name="entry.709815294" value="Yes" />
                                    </div>
                                    <div className="col-6 mx-auto">
                                        <label htmlFor="No">No</label>
                                        <br></br>
                                        <input type="radio" id="No" name="entry.709815294" value="No" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="form-group pb-3 col-9 mx-auto">
                            <label><strong>What is your nationality?</strong></label>
                            <input type="text" name="entry.53135097" className="form-control" placeholder="E.g. Sweden" />
                        </div>

                        <div className="form-group pb-3 col-9 mx-auto">
                            <label><strong>What is your ethnicity?</strong></label>
                            <input type="text" name="entry.837250477" className="form-control" placeholder="E.g. Swedish" />
                        </div>

                        {/* Question 1 */}
                        <input type="hidden" name="entry.1373666093" value={this.props.result[1].test}></input>
                        <input type="hidden" name="entry.1540225233" value={this.props.result[1].answer}></input>
                        <input type="hidden" name="entry.64170171" value={this.props.result[1].time}></input>

                        {/* Question 2 */}
                        <input type="hidden" name="entry.673788132" value={this.props.result[2].test}></input>
                        <input type="hidden" name="entry.909874072" value={this.props.result[2].answer}></input>
                        <input type="hidden" name="entry.1214771412" value={this.props.result[2].time}></input>

                        {/* Question 3 */}
                        <input type="hidden" name="entry.857692316" value={this.props.result[3].test}></input>
                        <input type="hidden" name="entry.1979085591" value={this.props.result[3].answer}></input>
                        <input type="hidden" name="entry.696125788" value={this.props.result[3].time}></input>

                        {/* Question 4 */}
                        <input type="hidden" name="entry.1530761292" value={this.props.result[4].test}></input>
                        <input type="hidden" name="entry.357877428" value={this.props.result[4].answer}></input>
                        <input type="hidden" name="entry.1902196959" value={this.props.result[4].time}></input>

                        {/* Question 5 */}
                        <input type="hidden" name="entry.326821628" value={this.props.result[5].test}></input>
                        <input type="hidden" name="entry.1282728155" value={this.props.result[5].answer}></input>
                        <input type="hidden" name="entry.1237699734" value={this.props.result[5].time}></input>


                        <input type="submit" onClick={this.props.changeState} className="btn btn-danger col-5 btn-rounded btn-block m-3 mx-auto" value="Submit"></input>

                    </form>
                </div>

            </div>
        )
    }
}
