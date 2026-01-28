import { useState } from 'react'

const Title = ( {title} ) => <h1>{title}</h1>

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

const Stat = ( {text, num}) => <p>{text} {num}</p>

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
      <Stat text="good" num={good} />
      <Stat text="neutral" num={neutral} />
      <Stat text="bad" num={bad} />
    </div>
  )
}

export default App
