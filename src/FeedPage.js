import './MainPageComponents/Main.css';
import {useState, useEffect} from 'react';
import Lsidebar from './MainPageComponents/Lsidebar';
import Feeds from './MainPageComponents/Feeds';
import RsideBar from './MainPageComponents/RsideBar';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function FeedPage(props) {
    
    const [values,setValues]= useState({props})
//    console.log(values.location.aboutProps);
console.log(values)
       return (
         <div className="Feeds" >
         <div className="Details">
        <Lsidebar/>
           
        <Feeds/>
            
        <RsideBar account={values}/>
           
        </div> 
        </div>
        
    )
}

export default FeedPage

