import React, { Component } from 'react';
import {handleInputAction} from '../actions/action';
import {connect} from 'react-redux';

class Education extends Component {

    

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Education Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.props.increment}>
                    
                    



                    <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>College/University*</label>
                            <input type="text" name="edu1_school" className="form-control" onChange={(e)=>this.props.handleinput(e.target)}  required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year*</label>
                            <input type="text" name="edu1_year" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification*</label>
                            <input type="text" name="edu1_qualification" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required/>
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="edu1_desc" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required/>
                        </div>
                    </div>

                    <br/>

                        

                    <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>School</label>
                            <input type="text" name="edu2_school" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Year</label>
                            <input type="text" name="edu2_year" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Qualification</label>
                            <input type="text" name="edu2_qualification" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description</label>
                            <input type="text" name="edu2_desc" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required/>
                        </div>
                    </div>
                    <br/>
                    <div className="container text-center">
                    <button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button>

                    </div>
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

 export default connect(mapStateToProps, mapDispatchToProps)(Education);
