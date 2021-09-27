import {useRef} from 'react';
import NavBar from './NavBar';
import './App.css';

function App() {
  const overlayRef = useRef();
  return (
    <div className="App">
      <NavBar overlayRef={overlayRef}/>
      <div className="overlay" ref={overlayRef}></div>
      <p>testing</p>
    </div>
  );
}

export default App;
