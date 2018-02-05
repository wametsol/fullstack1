import React from 'react'
import axios from 'axios'



  


const Person = ({person, toggleClick}) => {
 
  return (<li onClick={toggleClick}>
      
      
      {person.name}
      
      </li> 
    
  )
  
}



export default Person