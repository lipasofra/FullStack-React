import './App.css';
import { useState } from 'react';

const Button = (props) => (
  <button onClick = {props.handleClick}>
    {props.text}
  </button>
)

const StatisticsLine  =(props) => {
  return(
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.textAfter}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const total = props.good + props.neutral + props.bad
  const average = (props.good-props.bad)/total
  const percentageGood = props.good/total*100

  if(total !== 0){
    return(
      <>
      <h2>Feedback Results</h2>
      <table>
        <tbody>
          <tr>
            <td>Good: </td>
            <td>{props.good}</td>
          </tr>
          <tr>
            <td>Bad: </td>
            <td>{props.bad}</td>
          </tr>
          <tr>
            <td>Neutral: </td>
            <td>{props.neutral}</td>
          </tr>
        </tbody>
      </table>
      

      <h2>Statistics</h2>
      <table>
        <tbody>
        <StatisticsLine text="Total: " value={total} />
        <StatisticsLine text="Average Score: " value={average} />
        <StatisticsLine text="Percentage of positive: " value={percentageGood} textAfter=" %" />
        </tbody>
      </table>
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
