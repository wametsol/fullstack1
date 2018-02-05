import React from 'react'



const Osa = (props) => <p>{props.osa} {props.tehtavia}</p>
const Sisalto = ({kurssit}) => {
  return kurssit.osat.map((kurssi, i)=><Osa key={i}
  osa={kurssit.osat[i].nimi} tehtavia={kurssit.osat[i].tehtavia}/>)
}
const Otsikko = (props) => <h1>{props.kurssi.nimi}</h1>




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

const Kurssi = ({kurssii}) => {
  
  
  // const result = kurssit.map((kurssi, i)=><Kurssi key={i} />)
 
   
   
  
 /*
   console.log(kurssit);
   
   var kk = kurssit.map(function(id){
     console.log(kk);
  */   
     return (
       
       
       <div>
         {console.log('Komponentti',kurssii)}
       <Otsikko kurssi={kurssii}/>
       <Sisalto kurssit={kurssii}/>
       <Yhteensa kurssit={kurssii}/>
       </div>
     ) 
    }



export default {Osa, Sisalto, Kurssi, Yhteensa, Otsikko}
