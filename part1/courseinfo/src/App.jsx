const Header = (props) => {
  return (<h1>{props.name}</h1>)
}

const Content = (props) => {
  return (<>
    <p>{props.p1} {props.n1}</p>
    <p>{props.p2} {props.n2}</p>
    <p>{props.p3} {props.n3}</p>
    </>
  )
  
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.n1 + props.n2 + props.n3}</p>
  )
}

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
      <Header name={course} />
      <Content p1={part1} p2={part2} p3={part3}
      n1={exercises1} n2={exercises2} n3={exercises3}/>
      <Total n1={exercises1} n2={exercises2} n3={exercises3}/>
    </div>
  )
}

export default App
