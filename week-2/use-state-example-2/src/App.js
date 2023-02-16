import logo from './logo.svg';
import { useState } from 'react'
import './App.css';

function GoalForm(props) {

  const [formData, setFormData] = useState({
    goal: "",
    by: ""
  })

  function submitHandler(e) {
    e.preventDefault()
    props.onAdd(formData)
    setFormData({goal: "", by: ""})
  }

  function changeHandler(e) {
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <h1>My Goals</h1>
      <form onSubmit={submitHandler}>
        <input type="text" name="goal" placeholder="Goal" value={formData.goal} onChange={changeHandler}/>
        <input type="text" name="by" placeholder="By..." value={formData.by} onChange={changeHandler}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

function ListOfGoals(props) {

  function deleteGoal(goal) {
    props.onDelete(goal);
  }

  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>My goal is to {g.goal} by {g.by}</span>
          <button onClick={() => deleteGoal(g)}>Delete</button>
        </li>
      ))}
    </ul>
  )
}

function App() {
  const [allGoals, updateAllGoals] = useState([])

  function addGoal(goal) { 
    updateAllGoals([...allGoals, goal]);
  }

  function deleteGoal(goal) {
    updateAllGoals(allGoals.filter(g => g !== goal));
  }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} onDelete={deleteGoal} />
    </div>
  );
}

export default App;
