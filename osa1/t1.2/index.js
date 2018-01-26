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
      <Osa osa={props.osa1} tehtava={props.tehtavia1} />
      <Osa osa={props.osa2} tehtava={props.tehtavia2} />
      <Osa osa={props.osa3} tehtava={props.tehtavia3} />
      </div>
  )
}
const Yhteensa = (props) =>{
  return (
    <div>
      <p>Yhteensa {props.maara} tehtävää </p>
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
  const osa1 = 'Reactin perusteet'
  const tehtavia1 = 10
  const osa2 = 'Tiedonvälitys propseilla'
  const tehtavia2 = 7
  const osa3 = 'Komponenttien tila'
  const tehtavia3 = 14

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto osa1={osa1} osa2={osa2} osa3={osa3}
       tehtavia1={tehtavia1} tehtavia2={tehtavia2} tehtavia3={tehtavia3} />
      <Yhteensa maara={tehtavia1 + tehtavia2 + tehtavia3}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

