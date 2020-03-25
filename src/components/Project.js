import React, { Component } from 'react';
import {handleInputAction} from '../actions/action';
import {connect} from 'react-redux';

class Project extends Component {

    

    render() {
        const { values, handleChange } = this.props;
        return (
            <div className="card animated fadeInLeft">
                <div className="card-body">

                    <h3 className="card-title">Projects Info</h3>
                    <hr />
                </div>
                <form onSubmit={this.props.increment}>
                    
                    



                    <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>1</b></h3>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title*</label>
                            <input type="text" name="proj1_title" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj1_link" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                        <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="proj1_desc" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                        </div>
                    </div>
                    <br/>

                        

                    <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                            <h3><b><i className="fas fa-check-circle mr-1"></i>2</b></h3>
                            <hr/>
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Title*</label>
                            <input type="text" name="proj2_title" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                        </div>
                        <div className="col-lg-6 text-left">
                            <label>Link</label>
                            <input type="text" name="proj2_link" className="form-control" onChange={(e)=>this.props.handleinput(e.target)} />
                        </div>
                    </div>
                    <div className="row col-lg-10 mx-auto">
                    <div className="col-lg-12 text-left">
                            <label>Description*</label>
                            <input type="text" name="proj2_desc" className="form-control" onChange={(e)=>this.props.handleinput(e.target)}  />
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

 export default connect(mapStateToProps, mapDispatchToProps)(Project);
