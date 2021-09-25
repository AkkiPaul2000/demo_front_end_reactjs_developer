import React from 'react'
import { Button } from '@material-ui/core';
import { useHistory } from "react-router-dom";



function Settings() {
    
    let history = useHistory();

    return (
        <div>
            <h1>Well nothing thought of this page just added to satisfy the mentioned list</h1>
            <Button
       
       onClick={history.goBack}>
        Back
      </Button>
        </div>
    )
}

export default Settings
