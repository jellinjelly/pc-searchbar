import SearchBar from '../SearchBar/SearchBar';
import './NavBar.css';

const NavBar = ({setIsShown, isShown, handleClick}) => {

  return (
    <ul className='navbar' onClick={handleClick}>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li className="search-bar">
        <SearchBar setIsShown={setIsShown} isShown={isShown}/>
      </li>
    </ul>
  )
}

export default NavBar;