import React from 'react'

const Header = (props) => {
    return(
      <h2>{props.name}</h2>
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
  
  const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises)
    const total = exercises.reduce((acumulado=0, exercisesPart) => {return exercisesPart + acumulado})
    return (
      <p style={{fontWeight: 'bold'}}>Number of exercises {total}</p>
    )
  }

  const Course = ({course}) => {
    return (
        <>
          <Header name={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts} />
        </>
    )
  }



  export default Course