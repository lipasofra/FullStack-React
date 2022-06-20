import './App.css';
import { useState } from 'react';

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good-props.bad)/total
  const percentageGood = props.good/total*100

  if(total !== 0){
    return(
      <>
      <h2>Feedback Results</h2>
      <h3>Good: {props.good}</h3>
      <h3>Bad: {props.bad}</h3>
      <h3>Neutral: {props.neutral}</h3>

      <h2>Statistics</h2>
      <div>
        <h4>Total: {total}</h4>
        <h4>Average Score: {average}</h4>
        <h4>Percentage of positive: {percentageGood} %</h4>
      </div>
      </>
      
    )
  }
  return(
    <p>No feedback given yet</p>
  )
  
  
} 


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  return (
    <>
      <h1>Unicafe Feedback</h1>
      
      <Button handleClick={()=>setGood(good+1)} text="Good" />
      <Button handleClick={()=>{setNeutral(neutral+1)}} text="Neutral" />
      <Button handleClick={()=>{setBad(bad+1)}} text="Bad" />
      
      
      <Statistics good={good} bad={bad} neutral={neutral} />


    </>
    
  )
}

export default App;
