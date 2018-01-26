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
      </div>
  )
}
const Statistic = (props) =>{
  return (
    <div>
      <p>positiivisia {props.positiivisia}%</p>
      </div>
  )
}
const Button = ({handleClick, text}) =>(
  
  <button onClick={handleClick}>
  {text}
  </button>
  
)

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


  
  
 
  eipalautteita = ()=>{
    if(this.state.maara===0){
      document.getElementById("1").disabled = true;
    }
    else{
      document.getElementById("1").disabled = false;
    }
  } 
  

  
  render(){

    const eipalautuksia = () =>{
      if(this.state.maara===0){
        return(
          <div>
          <b>Ei yhtään palautetta annettu</b>
          </div>

        )
      }
      return(
        <div>
        <Statit hyva={this.state.hyva} neutraali={this.state.neutraali}
       huono={this.state.huono} keskiarvo={Math.round((this.state.keskiarvo)*10)/10}/>
       <Statistic positiivisia={Math.round((this.state.positiivisia)*1000)/10}/>
       </div>
      )
    }
     

    const otsikko = {
      yla: 'anna palautetta',
      ala: 'statistiikka'
    
    
    }
   
    return (
    <div>
      <Otsikko otsikko={otsikko.yla} />
      <Button
       handleClick={this.kasvataYhdella('hyva')}
       text="hyvä"
       />
       <Button
       handleClick={this.kasvataYhdella('neutraali')}
       text="neutraali"
       /> 
       <Button
       handleClick={this.kasvataYhdella('huono')}
       text="huono"
       />   
       
      <Otsikko otsikko={otsikko.ala} />
      
      
      <div>{eipalautuksia()}</div>
      
      
      
      
       
       
        </div>
     
    
  )
}

}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)

