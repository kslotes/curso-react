import React, { useState } from 'react'
import * as ReactDOM from 'react-dom/client'

const StatisticLine = ({text, value}) => {
   return (
      <span>{text}: {value}</span>
   )
}

const Statistics = ({statistics}) => {
   return (
      <table>
         <tbody>
            <tr>
               <td>
                  <StatisticLine text="good" value={statistics.good}/>
               </td>
            </tr>
            <tr>
               <td>
                  <StatisticLine text="neutral" value={statistics.neutral}/>
               </td>
            </tr>
            <tr>
               <td>
                  <StatisticLine text="bad" value={statistics.bad}/>
               </td>
            </tr>
            <tr>
               <td>
                  <StatisticLine text="all" value={statistics.all}/>
               </td>
            </tr>
            <tr>
               <td>
                  <StatisticLine text="average" value={statistics.average}/>
               </td>
            </tr>
            <tr>
               <td>
                  <StatisticLine text="positive" value={statistics.positive + " %"}></StatisticLine>
               </td>
            </tr>
         </tbody>
      </table>
   )
}

const Button = ({handleClick, text}) =>  <button onClick={handleClick}>{text}</button>

const App = () => {
   // save clicks of each button to its own state
   const [good, setGood] = useState(0)
   const [neutral, setNeutral] = useState(0)
   const [bad, setBad] = useState(0)

   const handleGoodClick = () => setGood(good + 1);
   const handleNeutralClick = () => setNeutral(neutral + 1);
   const handleBadClick = () => setBad(bad + 1);

   const all = good + bad + neutral;

   const statistics = {
      good: good,
      neutral: neutral,
      bad: bad,
      all: good + neutral + bad,
      average: (good + (bad * -1)) / all,
      positive: (good * 100) / all,
   }

 return (

      <div>
         <h1>give feedback</h1>
         <br/>
         <Button handleClick={handleGoodClick} text={"good"}>good</Button>
         <Button handleClick={handleNeutralClick} text={"neutral"}>neutral</Button>
         <Button handleClick={handleBadClick} text={"bad"}>bad</Button>
         <h1>statistics</h1>
         {all === 0 ?  "No feedback given" : <Statistics statistics={statistics}/>}
         <br/>
      </div>
   )

}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
