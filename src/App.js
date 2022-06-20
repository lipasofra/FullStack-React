import './App.css';
import { useState } from 'react';

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  return(
    <div>
      <h4>Total: {props.total}</h4>
      <h4>Average Score: {props.average}</h4>
      <h4>Percentage of positive: {props.percentageGood} %</h4>
    </div>
   
  )
  
} 


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good-bad)/total
  const percentageGood = good/total*100

  return (
    <>
      <h1>Unicafe Feedback</h1>
      
      <Button handleClick={()=>setGood(good+1)} text="Good" />
      <Button handleClick={()=>{setNeutral(neutral+1)}} text="Neutral" />
      <Button handleClick={()=>{setBad(bad+1)}} text="Bad" />
      
      <h2>Feedback Results</h2>
      <h3>Good: {good}</h3>
      <h3>Bad: {bad}</h3>
      <h3>Neutral: {neutral}</h3>

      <Statistics total={total} average={average} percentageGood={percentageGood} />


    </>
    
  )
}

export default App;
