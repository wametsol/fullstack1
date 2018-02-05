import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas', number: '040-123456' },
      { name: 'Martti Tienari', number: '040-123456' },
      { name: 'Arto Järvinen', number: '040-123456' },
      { name: 'Lea Kutvonen', number: '040-123456' }
      ],
      newName: '',
      newNumber: '',
      filter: ''
    }
  }
  addNum = (event) => {
      event.preventDefault()
        
        
      if(this.state.persons.find(persons => persons.name === this.state.newName)){
        console.log('pukama');
        this.setState({
           
            newName: '',
            newNumber: ''
            
        })
        alert('Nimi on jo!');
        return
        
    }
    else{  
      
      const numObject = {
          name: this.state.newName,
          number: this.state.newNumber
      }
      const persons = this.state.persons.concat(numObject)
     
      this.setState({
          persons: persons,
          newName: '',
          newNumber: ''
      })
    
    }
      
  }

  handleNum = (event) => {
    console.log(event.target.value)
    
    
    this.setState({newNumber: event.target.value})
    
    
    
}
  
  handleAdd = (event) => {
    console.log(event.target.value)
    
    
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
        //var filu = this.state.filter
        console.log('filtteri',this.state.filter);
        
        var filtered = this.state.persons
        
        console.log('personssit', filtered);
        
        
        
        
        
        
        if(this.state.filter !== ''){
            
            // ** Tämä näyttää jos filtteri on osa henkilön nimeä
            filtered = this.state.persons.filter(name => name.name.toLowerCase().includes(this.state.filter.toLowerCase()));
            console.log('filtteröity ', filtered);

            /*  *** Tämä näyttää jos henkilö alkaa filtterin mukaan
            filtered = this.state.persons.filter(name => name.name.toLowerCase().startsWith(this.state.filter.toLowerCase()));
            console.log('filtteröity ', filtered);
            */

        }
        
        
        return(
                <ul>
                {console.log('palautus',filtered)}
                {filtered.map(filtered => 
                <li key={filtered.name}> {filtered.name} {filtered.number}
                </li>)}
    
                </ul>
        )
    }
      

    return (
      <div>
        <h1>Puhelinluettelo</h1>
        <div>
            rajaa näytettäviä: <input value={this.state.filter}
            onChange={this.handleFilter}/>
        </div>
        <h2>Lisää uusi</h2>
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
            {showFiltered()}
            
            
            
        </ul>    
        
      </div>
    )
  }
}


export default App