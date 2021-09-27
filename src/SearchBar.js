import {useState, useEffect} from 'react';
import TypeView from './TypeView';
import './SearchBar.css';

const SearchBar = (props) => {
  const {overlayRef} = props;
  const [data, setData] = useState([]);
  const [searchView, setSearchView] = useState([]);
  const [suggestTypes, setSuggestTypes] = useState([]);

  function handleChange(e){
    if(e.target.value) {
      e.target.nextSibling.style.display = 'block';
      overlayRef.current.style.display = 'block';
      let suggestedProducts = []
      for(let product of data) {
        if(suggestedProducts.length < 8) {
          if(product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            suggestedProducts.push(product)
          }
        } else {
          break;
        }
      }
      let typeCount = {}
      let html = suggestedProducts.map((item, idx) => {
        typeCount[item.type] = typeCount[item.type] + 1 || 1
        let name = item.name.toLowerCase()
        name = name.split(e.target.value)
        let completed = []
        name.forEach((chunck, idx) => {
          if(chunck && idx === 0){
            completed.push(<span key={idx}><b>{chunck}</b></span>)
          } else if(chunck){
            completed.push(<span key={idx}>{e.target.value}<b>{chunck}</b></span>)
          }
        })
        return <a href={item.url} key={item.name + idx}>{completed}</a>
      })
      let sortedTypeCount = Object.entries(typeCount).sort((a, b) => b[1] - a[1])
      setSuggestTypes(sortedTypeCount)
      setSearchView(html)
    } else {
      e.target.nextSibling.style.display = 'none';
      overlayRef.current.style.display = 'none';
    }
  }

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/products.json`)
    .then(result => result.json())
    .then(data => setData(data.products))
  }, [])

  return (
    <>
      <input type="text" placeholder="Search..." onChange={handleChange} className="search-input"/>
      <div className="dropdown">
        <TypeView data={suggestTypes}/>
        {searchView}
      </div>
    </>
  )
}

export default SearchBar;