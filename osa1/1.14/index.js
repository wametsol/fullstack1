import React from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) =>(
  
  <button onClick={handleClick}>
  {text}
  </button>
  
)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      pisteet: [0,0,0,0,0,0]
    }
  }
  

  render() {
    const iso = () =>{
      
      return(
        <div>
          {this.props.anecdotes[this.state.pisteet.indexOf(Math.max(...this.state.pisteet))]}
          </div>
      )
    }
    const randomi = () =>{

      return() =>{
        this.setState((prevState) =>({selected: Math.floor(Math.random()*6)}));
      
    }
    }
    const aanesta = () =>{
      console.log(this)
      return() =>{
      const kopio = [...this.state.pisteet]
      kopio[this.state.selected] +=1
      this.setState((prevState)=>({pisteet: kopio}))
    }

    
      
    }

    return (
      <div>
        {this.props.anecdotes[this.state.selected]}
        <p>has {this.state.pisteet[this.state.selected]} votes</p>

        
        
        
        <Button
       handleClick={aanesta()}
       text="vote"
       />
        <Button
       handleClick={randomi()}
       text="Satunnainen!"
       />
      
      <h1>anecdote with most votes:</h1>
      <div>{iso()}</div>
      
      </div>
    )
  }
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)