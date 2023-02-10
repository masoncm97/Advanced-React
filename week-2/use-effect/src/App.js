import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';

function App() {
  const [toggle, setToggle] = useState(false)

  const clickHandler = () => {
    setToggle(!toggle);
  }

  useEffect(() => {
    document.title = toggle ? "Welcome to little lemon" : "Using the use effect hook"
  }, [])
  
  return (
    <div className="App">
      <h1>Using the useEffect hook</h1>
      <button onClick={clickHandler}>
        Toggle Message
      </button>
      {toggle && <h2>Welcome to little lemon</h2>}
    </div>
  );
}

export default App;
