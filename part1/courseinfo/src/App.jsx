import { useState } from 'react'

const Title = ( {title} ) => <h1>{title}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const StatisticLine = ( {cat, value} ) => <p>{cat} {value}</p>
 
const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  if (all === 0) {
    return (
      <p>No feedback given</p>
    )
  }
  
  return (
    <>
    <StatisticLine cat='good' value={props.good} />
    <StatisticLine cat='neutral' value={props.neutral} />
    <StatisticLine cat='bad' value={props.bad} />
    <StatisticLine cat='all' value={all} />
    <StatisticLine cat='average' value={(props.good - props.bad) / all} />
    <StatisticLine cat='positive' value={props.good * 100 / all + ' %'} />
    </>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handle = (category, setter) => () => setter(category + 1)

  return (
    <div>
      <Title title='give feedback' />
      <Button onClick={handle(good, setGood)} text='good'/>
      <Button onClick={handle(neutral, setNeutral)} text='neutral'/>
      <Button onClick={handle(bad, setBad)} text='bad'/>    
      <Title title='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
