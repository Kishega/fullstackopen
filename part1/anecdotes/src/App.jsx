import { useState } from 'react'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [state, setState] = useState({ selected: 0, votes: Array(anecdotes.length).fill(0) })

  const handleNext = () => {
    const newState = {
      selected: Math.floor(Math.random() * anecdotes.length),
      votes: state.votes
    }

    setState(newState)
  }

  const handleVote = () => {
    const copy = [...state.votes]
    copy[state.selected] += 1
    const newState = {
      selected: state.selected,
      votes: copy
    }

    setState(newState)
  }

  const mostVotes = () => {
    let max = 0
    let res = 0
    for (let i=0; i<state.votes.length; i++) {
      if (state.votes[i] > max) {
        res=i
        max=state.votes[i]
      }
    }
    
    return res
  }

  const most=mostVotes()

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[state.selected]}</p>
      <p>has {state.votes[state.selected]} votes</p>
      <Button handleClick={handleVote} text="vote" />
      <Button handleClick={handleNext} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[most]}</p>
      <p>has {state.votes[most]} votes</p>
    </div>
  )
}

export default App
