import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) =>{
  return (
    <div>
      <h1>{props.otsikko}</h1>
      </div>
  )
}
const Statit = (props) =>{
  return (
    <div>
      <p>hyvä {props.hyva} </p>
      <p>neutraali {props.neutraali} </p>
      <p>huono {props.huono} </p>
      </div>
  )
}

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      hyva:0,
      neutraali: 0,
      huono:0
    }
    
    
    
    
  }
  kasvataYhdella = (props) =>{
    console.log(this)
    if(props==='hyva'){
      return () =>{
        this.setState({hyva: this.state.hyva + 1})
        }
    }
    if(props==='neutraali'){
      return () =>{
        this.setState({neutraali: this.state.neutraali + 1})
        }
    }
    if(props==='huono'){
      return () =>{
        this.setState({huono: this.state.huono + 1})
        }
    }
    
  }
    
  

  
  render(){
    const otsikko = {
      yla: 'anna palautetta',
      ala: 'statistiikka'
    
    }
    
    return (
    <div>
      <Otsikko otsikko={otsikko.yla} />
       <button onClick={this.kasvataYhdella('hyva')}>hyvä</button>
       <button onClick={this.kasvataYhdella('neutraali')}>neutraali</button>
       <button onClick={this.kasvataYhdella('huono')}>huono</button>
      <Otsikko otsikko={otsikko.ala} />
      <Statit hyva={this.state.hyva} neutraali={this.state.neutraali}
       huono={this.state.huono} />
    </div>
  )
}

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

