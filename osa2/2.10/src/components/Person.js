import React from 'react'

const Person = ({person}) => {
  return (<li>
      {console.log(person)
      }
      {person.name} {person.number}
      
      </li>
    
  )
}

export default Person