import React from 'react'
import ReactDOM from 'react-dom'

const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>
const Sisalto = ({kurssit}) => {
    return kurssit.osat.map((kurssi, i)=><Osa key={i}
    osa={kurssit.osat[i].nimi} tehtavia={kurssit.osat[i].tehtavia}/>)
  }



const Yhteensa = ({kurssit}) => {
  
  console.log(kurssit);
  var summa = kurssit.osat.map(kurssi=>kurssi.tehtavia).reduce(function(summa, tehtavat){
    console.log(summa);
    
    return summa + tehtavat
  }, 0)
  return(
    <p>yhteensä {summa} tehtävää</p>
  )
}
/*
const kurssit = kurssi.map(kurssi =><li key={kurssi.id}>{kurssi.osat.nimi} {kurssi.osat.tehtavia}</li>)
*/

const Kurssit = ({kurssit}) => {
  return kurssit.map((kurssi, i)=><Kurssi key={i} kurssit={kurssit[i]} />)

}

const Kurssi = ({kurssit}) => {
  
  
 // const result = kurssit.map((kurssi, i)=><Kurssi key={i} />)

  
  
 
/*
  console.log(kurssit);
  
  var kk = kurssit.map(function(id){
    console.log(kk);
 */   
    return (
      <div>
      <Otsikko kurssi={kurssit}/>
      <Sisalto kurssit={kurssit}/>
      <Yhteensa kurssit={kurssit}/>
      </div>
    ) 
  
}

const App = () => {
  const kurssi = [
    {
      nimi: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    }
  ]

  
  
  
  return (
    
    <div>
      <h1>Opetusohjelma</h1>
      <Kurssit kurssit={kurssi}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)