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
  render() {
    return (
      <div>
        <h2>Puhelinluettelo</h2>
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
            {console.log(this.state.persons)}
            {this.state.persons.map(persons => 
            <li key={persons.name}> {persons.name} {persons.number}
            </li>)}
            
            
        </ul>    
        
      </div>
    )
  }
}

export default App