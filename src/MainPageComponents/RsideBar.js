import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import {useState} from 'react'
import "./Main.css"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
function RsideBar(props) {
    
    if('state' in props.account.props.location && props.account.props.location.state === undefined){
        var data={};
    }else{
        var data=props.account.props.location.aboutProps.value
    }
    const [values,setValues]= useState(data)
    console.log(props)
    return (
        <div className="Rside">
        <div className="Profile">
            { !data.username ? 
            <div className="Account">
            <div className="Avatar"><Avatar alt="Remy Sharp"  sx={{ width: 56, height: 56 }}/><h2>No Profile</h2></div>
            <Link className="link" to="/login"><Button variant="contained">LogIn/SignUp</Button></Link></div>:
            <div className="Account">
            <div className="Avatar"><Avatar alt="Remy Sharp" src="img\blur-face.jpg"  sx={{ width: 56, height: 56 }}/><h2>{data.username}</h2></div>
            <h4>{data.email}</h4>
           <Link className="link"  to={
       {     
         pathname: '/profile',
         aboutProps:{
             value:values,
         }
        }
  }> <Button variant="contained"> Edit Profile</Button></Link></div>
           
            }
          </div>  
        </div>
    )
}

export default RsideBar
