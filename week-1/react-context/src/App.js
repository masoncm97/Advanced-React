import logo from './logo.svg';
import {useUser} from './UserContext'
import './App.css';

// Props and State

// Props: Passed externally to the component, immutable. 
// State: Managed internally by the component, private, mutable. 
// Both are Plain JS Object, deterministic, and trigger render updates on change

// If a component needs to alter one of its attributes at some point in time, it
// should be in state. 

// State is optional, and sometimes preferrable not to have. 

// Stateless components: Props only, no state. Easy to follow and test. 
// Stateful components: Props and state: Client-server communication, data processing, responding to user events

// Context

// Theme, geolocation => Global state for the entire application
// Props can be used to pass data down, but is excessive in this case. 
// Props Drilling Problem: Passing data through all component tree levels (even though some proxy components won't need it)

// Enter the Context API
// Alternative way to pass data through components
// Useful for global state

// Two components that need to know the authenticated user: the 

const LoggedInUser = () => {
  const {user} = useUser()

  return (
    <p>
      Hello <span className="Username">{user.name}</span>
    </p>
  )
}

const Header = () => {
  return (
    <header>
      <h2>Blog App</h2>
      <LoggedInUser />
    </header>
  )
}

const Page = () => {
  const {user} = useUser()

  return (
    <div>
      <h2>What is Lorem Ipsum?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Written by: {user.name}</p>
    </div>
  )
}
function App() {
  return (
    <div className="App">
      <p>yo</p>
     <Page />
    </div>
  );
}

export default App;
