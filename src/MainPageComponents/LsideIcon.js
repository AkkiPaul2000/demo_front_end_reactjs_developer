import React from 'react'
import "./Main.css"
function LsideIcon({Text,Icon}) {
    return (
       <div className="group">
          <div className="sideIcon">
          
          <Icon />
              <h2>{Text}</h2>
          </div>  
          </div>
        
    )
}

export default LsideIcon
