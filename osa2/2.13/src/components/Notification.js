

import React from 'react'
const Notification = ({ message, style}) => {
    if (message === null) {
      return null
    }
    else{
        if(style === null){
            return(
        <div className="success">
        {message}
      </div>
            )
        }
        else{
            return (
                <div className="error">
                {message}
              </div>
              )
        }
    }
    
  }

  export default Notification