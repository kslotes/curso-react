import React from 'react'
import ReactDOM from 'react-dom'

const Title = ({course}) => <h1>{course}</h1>

const Part = ({name, exercises}) => <p>{name} {exercises}</p>

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
}

const Total = ({total}) => <p>Number of exercises {total}</p>
const App = () => {
    const course = {
        name:  'Half Stack application development',
        parts:  [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Title course={course.name}/>
            <Content parts={course.parts}/>
            <Total total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))
