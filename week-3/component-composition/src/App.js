import logo from './logo.svg';
import './App.css';

const Button = ({ children, backgroundColor }) => {
  return (
    <button style={{ backgroundColor }}>{children}</button>
  )
}

const Alert = ({ children }) => {
  return (
    <>
      <div className="Overlay"></div>
      <div className="Alert">{children}</div>
    </>
  )
}

const DeleteButton = () => {
  return <Button backgroundColor="red">Delete</Button>
}

function App() {
  return (
    <div className="App">
      <header>Little Lemon</header>
      <Alert>
        <h4>Delete Account</h4>
        <p>Are you sure you want to proceed?</p>
        <DeleteButton></DeleteButton>
      </Alert>
    </div>
  );
}

export default App;
