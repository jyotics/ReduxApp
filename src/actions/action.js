
import axios from 'axios';
import { saveAs } from 'file-saver';

export function increment(e) {
   console.log(e);
    return {
       type: 'INCREMENT'
    }
 }
 export function decrement() {
    return {
       type: 'DECREMENT'
    }
 }
 export function reset() {
    return { type: 'RESET' }
 }

 export const handleInputAction = (input) =>{
   return {
       type :"UPDATE_INPUT",
       payload:input
   }
}

export const handleEmailAction = (input) =>{
   return {
       type :"UPDATE_EMAIL",
       payload:input
   }
}




export const handlesubmitAction=(values)=>{
   return (dispatch) =>{
      console.log("Data Obj",values)
      axios.post('http://localhost:5000/create-pdf', values)
       .then(()=>axios.get('http://localhost:5000/fetch-pdf', { responseType: 'blob' }))
       .then(res2=>{
           //console.log("This is State",dataObj)
           const pdfBlob = new Blob([res2.data], { type: 'application/pdf' });
           saveAs(pdfBlob, 'Resume.pdf');
       })
   }

}




export const fetchResumeAction=()=>{
   return (dispatch) =>{
       fetch('/fetch-pdf')
       .then(res=>res.json())
       .then(res2=>{
           console.log(res2)
           //dispatch({type:'GET_WISH',payload:res2})
       })

   }

}






 
