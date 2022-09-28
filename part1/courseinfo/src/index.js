import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>

const Part = ({text, cant}) => {
  return <p>{text} {cant}</p>
}
const Content = (props) => {
  return (
    <div>
      <Part text={props.part1} cant={props.cant1}/>
      <Part text={props.part2} cant={props.cant2}/>
      <Part text={props.part3} cant={props.cant3}/>
    </div>
  )
}

const Total = ({total}) => <p>Number of exercises {total}</p>
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Title course={course}/>
        <Content part1={part1} cant1={exercises1} part2={part2} cant2={exercises2} part3={part3} cant3={exercises3}/>
        <Total total={exercises1+exercises2+exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
