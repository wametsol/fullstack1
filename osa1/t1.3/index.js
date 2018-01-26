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
      <p>{props.s1} {props.t1}</p>
      <p>{props.s2} {props.t2}</p>
      <p>{props.s3} {props.t3}</p>
      
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
  const osa1 = {
    nimi: 'Reactin perusteet',
    tehtavia: 10
  }
  const osa2 = {
    nimi: 'Tiedonvälitys propseilla',
    tehtavia: 7
  }
  const osa3 = {
    nimi: 'Komponenttien tila',
    tehtavia: 14
  }

  return (
    <div>
      <Otsikko kurssi={kurssi}/>
      <Sisalto s1={osa1.nimi} t1={osa1.tehtavia} s2={osa2.nimi} t2={osa2.tehtavia}
      s3={osa1.nimi} t3={osa3.tehtavia} />
      <Yhteensa maara={osa1.tehtavia +osa2.tehtavia + osa3.tehtavia}/>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)

