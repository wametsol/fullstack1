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
      <p>keskiarvo {props.keskiarvo}</p>
      <p>positiivisia {props.positiivisia}%</p>
      </div>
  )
}

class App extends React.Component {
  constructor(){
    super()
    this.state ={
      hyva:0,
      neutraali: 0,
      huono:0,
      maara:0,
      
      positiivisia:0,
      keskiarvo:0
    }
    
    
    
    
  }
  kasvataYhdella = (props) =>{
    console.log(this)
    
    if(props==='hyva'){
      return () =>{
        this.setState((prevState) =>({hyva: prevState.hyva + 1}));
        this.setState((prevState) =>({maara: prevState.maara + 1}));
        this.setState((prevState) =>({positiivisia: prevState.hyva/prevState.maara}));
        this.setState((prevState) =>({keskiarvo: (prevState.hyva-prevState.huono)/prevState.maara}));
        }
    }
    if(props==='neutraali'){
      return () =>{
        this.setState((prevState) =>({neutraali: prevState.neutraali + 1}));
        this.setState((prevState) =>({maara: prevState.maara + 1}));
        this.setState((prevState) =>({positiivisia: prevState.hyva/prevState.maara}));
        this.setState((prevState) =>({keskiarvo: (prevState.hyva-prevState.huono)/prevState.maara}));
        
        }
    }
    if(props==='huono'){
      return () =>{
        this.setState((prevState) =>({huono: prevState.huono + 1}));
        this.setState((prevState) =>({maara: prevState.maara + 1}));
        this.setState((prevState) =>({positiivisia: prevState.hyva/prevState.maara}));
        this.setState((prevState) =>({keskiarvo: (prevState.hyva-prevState.huono)/prevState.maara}));
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
       huono={this.state.huono} keskiarvo={Math.round((this.state.keskiarvo)*10)/10}
        positiivisia={Math.round((this.state.positiivisia)*1000)/10} />
    </div>
  )
}

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

