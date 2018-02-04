import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [
        { name: 'Arto Hellas' }
      ],
      newName: ''
    }
  }
  addNum = (event) => {
      event.preventDefault()
      console.log('piupiu');
      const numObject = {
          name: this.state.newName,
      }
      const persons = this.state.persons.concat(numObject)
      this.setState({
          persons: persons,
          newName: ''
      })
      
  }
  handleAdd = (event) => {
    console.log(event.target.value)
    this.setState({newName: event.target.value})
    
    
}
//{this.state.map(name => <ul key={} name={name}/>)}
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
            <button type="submit">lisää</button>
          </div>
        </form>
        <h2>Numerot</h2>
        <ul>
            {console.log(this.state.persons)}
            {this.state.persons.map(persons => 
            <li key={persons.name}> {persons.name} 
            </li>)}
            
            
        </ul>    
        
      </div>
    )
  }
}

export default App