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
      newName: '',
      newNumber: '',
      filter: '',
      error: null,
      style: null
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
  addNum = (event) => {
      event.preventDefault()
        
        
      if(this.state.persons.find(persons =>
         persons.name === this.state.newName)){
        var henkilo = this.state.persons.filter(n =>
           n.name === this.state.newName)
        console.log(henkilo[0].id);
        const id = henkilo[0].id
        if(window.confirm(`${this.state.newName}  on jo luettelossa, korvataanko vanha numero uudella?`)){
        
        const numObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }
       personService
       .update(id, numObject)
      .then(newNumb=> {
        this.setState({
          persons: this.state.persons.map(person => person.id !== id ? person : numObject),
          newName: '',
          newNumber: '',
          error:  `Henkilön '${numObject.name}' numero vaihdettiin onnistuneesti`
        })
        
        
        
        
      }).catch(error =>{
        this.setState({
          persons: this.state.persons.filter(n => n.id !==id),
          newName: '',
          newNumber: '',
          style: 1,
          error: `Henkilö '${numObject.name}' on jo poistettu palvelimelta`
        })
      })

      setTimeout(() => {
        this.setState({error:null, style:null})
      }, 3000);
      return
    }
    else{
        
        this.setState({
           
            newName: '',
            newNumber: ''
            
        })
        alert('Nimi on jo!');

        return
      }
        
    }
    else{  
      
      const numObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }
       personService
       .create(numObject)
      .then(newNumb=> {
        this.setState({
          persons: this.state.persons.concat(newNumb),
          newName: '',
          newNumber: '',
          error: `Henkilö '${numObject.name}' lisättiin onnistuneesti`
        })
        setTimeout(() => {
          this.setState({error:null})
        }, 3000);
        
      })

      /*
      const persons = this.state.persons.concat(numObject)
     
      this.setState({
          persons: persons,
          newName: '',
          newNumber: ''
      })
      */    
    }
      
  }
  toggleDeleteOf = (person) =>{
    return ()  => {
      

      if(window.confirm(`poistetaanko ${person.name}`)){

        personService
      .destroy(person.id)
      .then(response => {
        this.setState({persons: this.state.persons.filter(n => n.id !==person.id),
          error: `Henkilö '${person.name}' poistettiin onnistuneesti`
        })
        
      })

      setTimeout(() => {
        this.setState({error:null})
      }, 3000);
        
      
    }
  }
}

  handleNum = (event) => {
    //console.log(event.target.value)
    
    
    this.setState({newNumber: event.target.value})
    
    
    
}
  
  handleAdd = (event) => {
    //console.log(event.target.value)
    
    
    this.setState({newName: event.target.value})
    
    
    
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
            
            // ** Tämä näyttää jos filtteri on osa henkilön nimeä
            filtered = this.state.persons.filter(name => name.name.toLowerCase().includes(this.state.filter.toLowerCase()));
            //console.log('filtteröity ', filtered);

            /*  *** Tämä näyttää jos henkilö alkaa filtterin mukaan
            filtered = this.state.persons.filter(name => name.name.toLowerCase().startsWith(this.state.filter.toLowerCase()));
            console.log('filtteröity ', filtered);
            */

        }
        
        
        return(
            //{console.log('palautus',filtered)}
            <ul>
                
                {filtered.map(person => <Person
                 key={filtered.name} 
                 person={person}
                 toggleDelete={this.toggleDeleteOf(person)}
                 ></Person> ) } 
                
    
                </ul>
            
                
        )
    }
   
      

    return (
      <div>

        <h1>Puhelinluettelo</h1>
        {console.log(this.state.error)}
        {<Notification message={this.state.error} style={this.state.style}/>}

        
        
        <div>
            rajaa näytettäviä: <input value={this.state.filter}
            onChange={this.handleFilter}/>
        </div>
        <h2>Lisää uusi / muuta olemassa olevaa numeroa</h2>
        <form onSubmit={this.addNum}>
          <div>
            nimi: <input value={this.state.newName} 
            onChange={this.handleAdd} />
          </div>
          <div>
            numero: <input value={this.state.newNumber}
            onChange={this.handleNum}/>
          </div>  
          <div>
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
            {showFiltered() }
            
            
            
        </ul>    
        
      </div>
    )
  }
}


export default App