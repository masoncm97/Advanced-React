import logo from './logo.svg';
import * as React from 'react';
import './App.css';

const Button = ({type, children, ...buttonProps}) => {
  const className = type === 'primary' ? 'PrimaryButton' : 'SecondaryButton';
  return (
    <button className={`Button ${className}`} {...buttonProps}>
      {children}
    </button>
  )
}

const LoginButton = ({type, children, ...buttonProps}) => {
  return (
    <Button
    type="secondary"
    {...buttonProps}
    onClick={() => {
      alert('logging in!')
    }}
    >
      {children}
    </Button>
  )
}

function App() {
  return (
    <div className="App">
     <header className="Header">Little Lemon</header>
     <Button type="primary" onClick={() => alert('signing up')}>Sign Up</Button>
     <LoginButton type="secondary" onClick={()=> alert('signing up')}>Login</LoginButton>
    </div>
  );
}

export default App;
