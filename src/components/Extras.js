import React, { Component } from 'react';
import {handleInputAction} from '../actions/action';
import {connect} from 'react-redux';
import axios from 'axios';
import { saveAs } from 'file-saver';




class Extras extends Component {



    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Extra Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.props.increment}>
                    
                    



                <div className="row col-lg-10 mx-auto">

                    <div className="col-lg-6 md-form">
                        <input type="text" name="extra_1" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                        <label htmlFor="extra_1">Languages</label>
                    </div>
                    <div className="col-lg-6 md-form">
                        <input type="text" name="extra_2" className="form-control" onChange={(e)=>this.props.handleinput(e.target)}  />
                        <label htmlFor="extra_2">Hobbies</label>
                    </div>
                </div>
                

                    <br/>

                    <div className="row col-lg-10 mx-auto">

                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_3" id="extra_3" className="form-control" onChange={(e)=>this.props.handleinput(e.target)}  />
                            <label htmlFor="extra_3">Activity/Achievement</label>
                        </div>
                        <div className="col-lg-6 md-form">
                            <input type="text" name="extra_4" id="extra_4" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                            <label htmlFor="extra_4">Activity/Achievement</label>
                        </div>
                    </div>


                        

                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 md-form">
                            <input type="text" name="extra_5" id="extra_5" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                            <label htmlFor="extra_5">Activity/Achievement</label>
                        </div>
                    </div>
                    <br />
                    <div className="container text-center">
                    <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>

                    </div>
                    <br />

                    
                    <br/>
                    
                    <br/>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
       counter: state.counter
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {
        handleinput :(input) => dispatch(handleInputAction(input))
    };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(Extras);
