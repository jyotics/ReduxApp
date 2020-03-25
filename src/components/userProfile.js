import React, { Component } from 'react';
import { increment, decrement, reset ,handlesubmitAction} from '../actions/action';
import {connect} from 'react-redux';
import PersonalDetails from '../components/personalDetails';
import Experience from '../components/experience';

import Project from '../components/Project';
import Education from '../components/Education';
import Extras from '../components/Extras';
import Success from '../components/Success';





class UserProfile extends Component {
   render() {
      console.log(this.props);
      const {counter,increment,decrement,handlesubmitAction} = this.props;

      switch (counter) {
         case 1:
            return (
            <div><PersonalDetails increment= {increment} decrement= {decrement} />
         <div>
            </div></div>
            );
         case 2:
            return (<div><Experience increment= {increment} decrement= {decrement} />
               </div>);
         case 3:
            return (<div><Project increment= {increment} decrement= {decrement} />
               </div>);
         case 4:
            return (<div><Education increment= {increment} decrement= {decrement} />
               </div>);
         case 5:
            return (<div><Extras increment= {increment} decrement= {decrement} />
               </div>);
         case 6:
            return (<div><Success handlesubmitAction={handlesubmitAction}/>
               </div>);
         default:
            return (<div>There is Something Wrong</div>)

      }
   }

   
}


const mapStateToProps = (state) => {
    return {
       counter: state.counter
    };
 };
 const mapDispatchToProps = (dispatch) => {
    return {
       increment: (e) => dispatch(increment(e)),
       decrement: () => dispatch(decrement()),
       reset: () => dispatch(reset()),
       handlesubmitAction :(values) => dispatch(handlesubmitAction(values))
    };
 };

 export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

//export default Counter;