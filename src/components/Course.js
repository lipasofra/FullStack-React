import React from 'react'

const Header = (props) => {
    return(
      <h1>{props.name}</h1>
    )
    
  }
  
  const Part = (props) => {
    return(
      <p>{props.part} {props.exercise}</p>
    )
    
  }
  
  const Content = ({parts}) => {
    return(
      <div>
        {parts.map(part =>
            <Part key={part.id} part={part.name} exercise={part.exercises}/> 
         )}
      </div>
    )
  }
  
  const Total = (props) => {
    const total = props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises
    return (
      <p>Number of exercises {total}</p>
    )
  }

  const Course = ({course}) => {
    return (
        <>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
        </>
    )
  }



  export default Course