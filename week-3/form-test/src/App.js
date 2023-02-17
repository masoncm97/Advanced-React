import logo from './logo.svg';
import FeedbackForm from './FeedbackForm';
import './App.css';

function App() {
  const handleSubmit = () => {
    console.log("Form submitted");
  };

  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit}/>
    </div>
  );
}

export default App;
