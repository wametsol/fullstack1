import React from 'react'
import ReactDOM from 'react-dom'
import Osa from './components/Kurssit'
import Sisalto from './components/Kurssit'
import Kurssi from './components/Kurssit'
import Otsikko from './components/Kurssit'
import Yhteensa from './components/Kurssit'



/*
const kurssit = kurssi.map(kurssi =><li key={kurssi.id}>{kurssi.osat.nimi} {kurssi.osat.tehtavia}</li>)
*/




  



const Kurssit = ({kurssit}) => {
  return () => {
    <div>
    {this.kurssit.map(kurssi=><Kurssi key={kurssi.id}  kurssii={kurssi} />)}
    </div>
}

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
      <ul>
         
      <Kurssit kurssit={this.kurssi}/>
      </ul>
      
    </div>
  )
}




ReactDOM.render(
  <App />,
  document.getElementById('root')
)
