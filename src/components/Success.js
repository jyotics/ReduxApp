import React, { Component } from 'react';

import {connect} from 'react-redux';

class Success extends Component {
    

  componentDidMount() {
    // When container was mounted, we need to start fetching todos.
    this.props.handlesubmitAction(this.props);
  }

   
  
    render() {

    
    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
            <i className="fas fa-check-circle fa-7x text-success"></i>
            <h2>Hang Tight while your Resume Downloads!</h2>
            <br/>
            
        </div>  
        
      </div>
    )
  }
}



const mapStateToProps = (state) => {
  return {
     counter: state.counter,
     name: state.name,
     email: state.email,
     phone: state.phone,
     linkedin: state.linkedin,
     github: state.github,
     skills: state.skills,
     exp1_org: state.exp1_org,
     exp1_desc: state.exp1_desc,
     exp1_pos: state.exp1_pos,
     exp1_dur:  state.exp1_dur,
     exp2_dur: state.exp2_dur,
     exp2_pos: state.exp2_pos,
     exp2_org: state.exp2_org,
     exp2_desc: state.exp2_desc,
     proj1_title:  state.proj1_title,
     proj1_link: state.proj1_link,
     proj1_desc: state.proj1_desc,
     proj2_title: state.proj2_title,
     proj2_link:  state.proj2_link,
     proj2_desc: state.proj2_desc,
     edu2_year:  state.edu2_year,
     edu2_desc: state.edu2_desc,
     edu2_school: state.edu2_school,
     edu2_qualification: state.edu2_qualification,
     edu1_desc: state.edu1_desc,
     edu1_year: state.edu1_year,
     edu1_qualification:  state.edu1_qualification,
     edu1_school: state.edu1_school,
     extra_3: state.extra_3,
     extra_1:  state.extra_1,
     extra_2:  state.extra_2,
     extra_4:  state.extra_4,
     extra_5:  state.extra_5
  };
};


export default connect(mapStateToProps, null)(Success);

