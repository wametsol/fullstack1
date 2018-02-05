import React from 'react'
import axios from 'axios'



  


const Person = ({person, toggleDelete}) => {
 
  return (<li>
      
      
      {person.name} {person.number}  
       <button onClick={toggleDelete}>poista</button>
      
      </li> 
    
  )
  
}



export default Person