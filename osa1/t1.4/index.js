import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) =>{
  return (
    <div>
      <h1>{props.kurssi}</h1>
      </div>
  )
}
const Sisalto = (props) =>{
  return (
    <div>
      <p>{props.osat[0].nimi} {props.osat[0].tehtavia}</p>
      <p>{props.osat[1].nimi} {props.osat[1].tehtavia}</p>
      <p>{props.osat[2].nimi} {props.osat[2].tehtavia}</p>
     
      </div>
  )
}
const Yhteensa = (props) =>{
  return (
    <div>
      <p>Yhteensa {props.osat[0].tehtavia +   props.osat[1].tehtavia +  + props.osat[2].tehtavia} tehtävää </p>
      </div>
  )
}
const Osa = (props) =>{
  return (
    <div>
      <p>{props.osa} {props.tehtava} </p>
      </div>
  )
}

const App = () => {
  const kurssi = 'Half Stack -sovelluskehitys'
  const osat = [
  {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  },
   {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  },
   {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }
]
  return (
    <div>
      <Otsikko kurssi={kurssi} />
      <Sisalto osat={osat} />
      <Yhteensa osat={osat} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

