import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = ({kurssit}) => {
  
  
    
  
    
    
    return kurssit.osat.map((kurssi, i)=><Osa key={i}
    osa={kurssit.osat[i].nimi} tehtavia={kurssit.osat[i].tehtavia}/>)
      
    
    
    
        
  }
  //<Osa osa={nimi.nimi} tehtavia={nimi.tehtavia} />
  //<Osa osa={knimi} tehtavia={kt} /> 

  //kurssit.osat.map(kurssi =>
   // <li key={kurssi.osat.id}>{kurssi.osat.nimi} </li>) 


const Yhteensa = (props) => {
  const [osa1, osa2, osa3] = props.kurssi.osat
  
  return(
    <p>yhteensä {osa1.tehtavia + osa2.tehtavia + osa3.tehtavia} tehtävää</p>
  )
}
/*
const kurssit = kurssi.map(kurssi =><li key={kurssi.id}>{kurssi.osat.nimi} {kurssi.osat.tehtavia}</li>)
*/
const Kurssi = ({kurssit}) => {
  
  
  const result = kurssit.osat.map(kurssi=>kurssi.tehtavia)
  
  
 

  
  
  return(
    <div>
      <Otsikko kurssi={kurssit}/>
      <Sisalto kurssit={kurssit}/>
        


      
      
     

    </div>
    
    
  )
}

const App = () => {
  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10,
        id: 1
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7,
        id: 2
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14,
        id: 3
      }
    ]
    
  }

  
  
  
  return (
    
    <div>
      <Kurssi kurssit={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)