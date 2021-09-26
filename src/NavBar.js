import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = () => {
  return (
    <ul>
      <li><a href="http://google.com">Home</a></li>
      <li><a href="http://google.com">About</a></li>
      <li>
        <SearchBar/>
      </li>
    </ul>
  )
}

export default NavBar;