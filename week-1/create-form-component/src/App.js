import logo from './logo.svg';
import {Component, useState } from 'react'
import './App.css';

// Creating Form Component

/* 
function App() {

  const[name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()  // Ignores page refresh
    setName("")         // Resets textbox

    console.log('form submitted')
  }

  // Connecting label with input: htmlFor -> pass id of the input
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className="Field">
            <label htmlFor="name">Name:</label>
            <input 
              id="name"
              type="text" 
              placeholder="Name" 
              name="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} />
          </div>
          <button disabled={!name} type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
}
*/

// Creating Controlled Form Component

function App() {
  
    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault()
      if (Number(score) <= 5 && comment.length <= 10) {
        alert("Please explain why")
        return
      }

      console.log("form submitted")
      setComment("")
      setScore("10")
    }

    return (
      <div className="App">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <h2>Feedback Form</h2>
              <div className="Field">
              <label>Score: {score}</label>
              <input 
                type="range" 
                min="0" 
                max="10" 
                value={score} 
                onChange={e => setScore(e.target.value)}
              />
            </div>
            <div className="Field">
              <label>Comment:</label>
              <textarea 
                value={comment}
                onChange={e => setComment(e.target.value)}>
              </textarea>
            </div>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </div>
    );
  }

export default App;
