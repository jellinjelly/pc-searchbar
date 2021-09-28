import {useState} from 'react';
import NavBar from './NavBar';
import Overlay from './Overlay';

function App() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <Overlay isShown={isShown}/>
      <header>
        <NavBar setIsShown={setIsShown} isShown={isShown}/>
      </header>
      <main>
        <h1>Lorem Ipsum</h1>
      </main>
    </>
  );
}

export default App;
