import SearchBar from './SearchBar';
import './NavBar.css';

const NavBar = (props) => {
  const {overlayRef} = props;

  return (
    <ul>
      <li><a href="http://google.com">Home</a></li>
      <li><a href="http://google.com">About</a></li>
      <li className="search-bar">
        <SearchBar overlayRef={overlayRef}/>
      </li>
    </ul>
  )
}

export default NavBar;