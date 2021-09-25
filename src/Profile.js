import React from 'react'
import { Button } from '@material-ui/core';
import "./Profile/Profile.css"
import { Link,Redirect } from 'react-router-dom'
import {useState,useEffect} from "react"
import TextField from '@mui/material/TextField';
import FormSignup from './Components/FormSignup';
import Done from './Profile/Done';
import validateInfo from './Components/validateInfo';


function Profile(props) {
    
    if('state' in props.location && props.location.state === undefined){
        var data={};
    }else{
        var data=props.location.aboutProps.value
    }
    const [profile, setProfile] = useState(data)
    const [errors,setErrors]= useState({})
    function handleTextFieldChange(key,e) {
        
            setProfile({...profile,[key]:e.value});
            
        
    };
    console.log(errors)
    useEffect(() => {
        
        setErrors(validateInfo(profile))}, [profile]);

       const [isSubmitted, setIsSubmitted] = useState(false)
       
       function submitValue(profile){
           setProfile(profile)
       }
      
       function submitForm(){
           setIsSubmitted(true)
       }
   
    
    return (

        <div className="profile-details">
        {!data.username? 
        <div>
        You have refreshed the page mistakenly so have to go through the demo login process again Sorry! 
        <Link to="/"><Button>Click here</Button></Link>
        </div>
        :
        <div>
        <h1>Edit profile</h1>
            <h3 >Username</h3>
            <TextField value={profile.username} helperText={errors.username} onChange={e => handleTextFieldChange("username",e.target)} />
            <h3 >Email</h3>
            <TextField value={profile.email} helperText={errors.email} onChange={e => handleTextFieldChange("email",e.target)} />
            <h3 >Change Password</h3>
            <TextField value={profile.password} helperText={errors.password} onChange={e => handleTextFieldChange("password",e.target)} />
            <h3 >Rewrite Password</h3>
            <TextField value={profile.password2} helperText={errors.password2} onChange={e => handleTextFieldChange("password2",e.target)} />

           
            {!Object.keys(errors).length && 
            <div  className="link-button"><Link className="link" to={
       {     
         pathname: '/',
         aboutProps:{
             value:profile
         }
       }
  }><Button variant="contained">Go To Feed</Button></Link></div>
            }
            {/* {!isSubmitted ? (<FormSignup submitForm={submitForm} submitValue={submitValue}/>):<Done value={profile}/>} */}
        </div> 
        }
        </div>
    )
}

export default Profile
