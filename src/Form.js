import React,{useState} from 'react'
import FormSignup from './Components/FormSignup';
import './Components/Form.css'

import FormSuccess from './Components/FormSuccess';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [values, setValues] = useState({})
    function submitValue(value){
        setValues(value)
    }
    function submitForm(){
        setIsSubmitted(true)
    }
    
    return (
        
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src= "img/account.png" alt="account" className="form-img"/>
            </div>
            
            
            {!isSubmitted ? (<FormSignup submitForm={submitForm} submitValue={submitValue}/>):<FormSuccess value={values}/>}
        </div>
         
      
    )
}

export default Form
