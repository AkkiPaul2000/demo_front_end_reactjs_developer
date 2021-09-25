import React from 'react'

import { Link } from 'react-router-dom'

function FormSuccess({value}) {
    
    return (
        <div className="form-content-right">
            <div className="form-success">We Have recieved your request</div>
            <img src='img\submitted.jpg' alt='success-image' className="form-img-2"/>
            <div className="form-button"><Link className="link" to={
       {     
         pathname: '/',
         aboutProps:{
             value
         }
        }
  }><button className="form-input-btn"> Go to Feed Page</button></Link></div>
        </div>
    )
}

export default FormSuccess
