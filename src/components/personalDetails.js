import React, { Component } from 'react'
import {handleInputAction,handleEmailAction} from '../actions/action';
import {connect} from 'react-redux';

class PersonalDetails extends Component {


    submitForm = e => {
        e.preventDefault();
        this.props.dispatch({
          type: "SUBMIT_FORM"
        });
      };
  
      
    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Personal Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.props.increment}>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-4 text-left">
                            <label>Name*</label>
                            <input type="text" name="name" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required/>
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Email*</label>
                            <input type="email" name="email" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                        <div className="col-lg-4 text-left">
                            <label>Mobile*</label>
                            <input type="text" name="phone" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-6 text-left">
                            <label>Linkedin</label>
                            <input type="text" name="linkedin" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Github</label>
                            <input type="text" name="github" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                    </div>
                    <br />
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Skills* (Separate each skill with a space and a comma)</label>
                            <input type="text" name="skills" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} required />
                        </div>
                    </div>
                    <br />
                    <div className="container text-center"><button type="submit" className="btn btn-info">Next<i className="fas fa-angle-right ml-1"></i></button></div>
                    <br/>
                </form>
            
            </div>
        )
    }
}


// const mapDispatchToProps = (dispatch) => {
//     return {
//        increment: () => dispatch(increment()),
//        decrement: () => dispatch(decrement()),
//        reset: () => dispatch(reset()),
//        handleInputChange : (e) =>dispatch(handleInputChange(e))
//     };
//  };


//  export default connect(null, mapDispatchToProps)(PersonalDetails);


const mapStateToProps = (state) => {
    return {
       counter: state.counter
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {
        handleinput :(input) => dispatch(handleInputAction(input)),
        handleemail :(input) => dispatch(handleEmailAction(input))
    };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(PersonalDetails);


//export default PersonalDetails;
