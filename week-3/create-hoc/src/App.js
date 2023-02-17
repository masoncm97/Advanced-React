import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';

const withMousePosition = (WrappedComponent) => {
  return (props) => {
    console.log(props)
    const [mousePosition, setMousePosition] = useState({
      x: 0, 
      y: 0
    })

    useEffect(() => {
      const handleMousePositionChange = (e) => {
        setMousePosition({
          x: e.clientX, 
          y: e.clientY
        })
      }

      window.addEventListener('mousemove', handleMousePositionChange)

      // Clean up
      return () => {
        window.removeEventListener('mousemove', handleMousePositionChange)
      }
    }, [])

    return <WrappedComponent {...props} mousePosition={mousePosition}/>
  }
}

const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse Position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.x}</span>
      </div>
    </div>
  )
}

const PointMouseLogger = ({mousePosition}) => {
  if(!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  )
}

const PanelMouseTracker = withMousePosition(PanelMouseLogger)
const PointMouseTracker = withMousePosition(PointMouseLogger)

function App() {
  return (
    <div className="App">
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
