import './App.css';
import { useState } from 'react';

const Button = (props) => (
  <button onClick = {props.handleClick}>
   {props.text}
  </button>
)


const App = () => {

  const anecdotes = [
    "If it hurts, do it more often",
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)

  const randomAnecdote = () => {
    const number = Math.floor(Math.random()*7);
    setSelected(number)
  }

  const addVote = (anecdote) => {
    const copy = [...points]
    copy[anecdote] += 1
    setPoints(copy)
  }

  const [points, setPoints] = useState(new Array(7).fill(0))

  const winner = points.indexOf(Math.max(...points))

  return (
    <>
      <h1>Anecdotes</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        has {points[selected]} votes
      </div>
      <br></br>
      <Button handleClick={()=>{addVote(selected)}} text="vote" />
      <Button handleClick={()=>{randomAnecdote()}} text="next anecdote" />

      <h2>Anecdote with most votes</h2>
      <div>
        {anecdotes[winner]}
      </div>
      <div>
        has {points[winner]} votes
      </div>

    </>
    
  )
}

export default App;
