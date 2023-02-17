import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

const DataFetcher = ({render, url}) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if(url.includes("desserts")){
      setData(['cake', 'ice cream', 'pie', 'brownie'])
    } else {
      setData(['water', 'soda', 'juice'])
    }
  }, [])

  return render(data)
};

const DessertsCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/desserts"
    render={(data) => <p>{data.length} desserts</p>} 
    />
  )
}

const DrinksCount = () => {
  return (
    <DataFetcher
    url="https://littlelemon/drinks"
    render={(data) => <p>{data.length} drinks</p>} 
    />
  )
}

function App() {
  return (
    <div className="App">
      <DessertsCount/>
      <DrinksCount/>
    </div>
  );
}

export default App;
