import {useState} from 'react';
import NavBar from './NavBar';
import Overlay from './Overlay';

function App() {
  const [isShown, setIsShown] = useState(false);

  // handleClick instead of onBlur to give keyboard navigation in dropdown
  const handleClickSetShown = (e) =>{
    setIsShown(false)
  }

  return (
    <>
      <Overlay isShown={isShown} setIsShown={setIsShown}handleClick={handleClickSetShown} />
      <header>
        <NavBar setIsShown={setIsShown} isShown={isShown} handleClick={handleClickSetShown}/>
      </header>
      <main>
        <h1>Lorem Ipsum</h1>
      </main>
    </>
  );
}

export default App;
