import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = ({setIsShown, isShown}) => {

  return (
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li className="search-bar">
        <SearchBar setIsShown={setIsShown} isShown={isShown}/>
      </li>
    </ul>
  )
}

export default NavBar;