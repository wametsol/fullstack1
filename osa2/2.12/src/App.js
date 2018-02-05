import React from 'react';
import Person from './components/Person'
import axios from 'axios'
import personService from './services/persons'
import Notification from './components/Notification';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],

      filter: ''
    
    }
  }

  componentDidMount(){
    console.log('will mount');
    
    personService
    .getAll()
    .then(response => {
      this.setState({persons: response})
    })
 
}
  
handleFilter = (event) => {
    
    
    
    if(event.target.value === ''){
        this.setState({filter: ''})
    }
    else{
    this.setState({filter: event.target.value})
    }
    
    
   

    

}



  render() {

    const showFiltered = () => {
        
        var filtered = this.state.persons
        if(this.state.filter !== ''){
            
           
            filtered = this.state.persons.filter(name => name.name.toLowerCase().includes(this.state.filter.toLowerCase()));
            

        }
        if(filtered.length===1){
          console.log(filtered[0]);
          return(
            <div>
            <h1>{filtered[0].name} {filtered[0].nativeName}</h1>
            <p>capital: {filtered[0].capital}</p>
            <p>population: {filtered[0].population}</p>
            <img src={filtered[0].flag} width="300" height="200"/>

            </div>
          )
          
        }
        if(filtered.length>9){
          return(
            <p>too many maches, specify another filter</p>
          )
        }
        
        return(
            //{console.log('palautus',filtered)}
            

            
            <ul>
                
                {filtered.map(person => <Person
                 key={filtered.name} 
                 person={person}
                
                 ></Person> ) } 
                
    
                </ul>
            
                
        )
    }
   
      

    return (
      <div>

        
        
        <div>
            find countries: <input value={this.state.filter}
            onChange={this.handleFilter}/>
        </div>
       
           <ul>
            {showFiltered() }
            
            
            
        </ul>    
        
      </div>
    )
  }
}


export default App