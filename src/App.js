import {useState} from 'react';
import NavBar from './Components/NavBar/NavBar';
import Overlay from './Components/Overlay';

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
        <img src="https://www.personalcapital.com/blog/wp-content/uploads/2021/09/65-ways-retire-cover@2x.jpg" alt="65 ways to retire smart" className='hero-img'/>
      </main>
    </>
  );
}

export default App;
