const iState={
    counter :1 ,
    name  :'',
    email :''
}

const reducer = (state = iState, action) => {
    switch (action.type) {
       case 'INCREMENT':  
            var newState = { ...state };
            newState.counter++;
            return newState;
       case 'DECREMENT':
            var newState = { ...state };
            newState.counter--;
            return newState;
     case "SET_FORMVALUES":
     return {
          ...state,
          formValues: action.payload
     };
     case 'UPDATE_INPUT':
          return{
          ...state,
          [action.payload.name]: action.payload.value
      };
       
     case "SUBMIT_FORM":
     console.log("--- Triggered Form submission ---");
     console.log("Form Data - ", state.formValues);
     return {
          ...state,
          message: "Form submitted!!"
     };
       default: return state;
    }
 }
 export default reducer;
