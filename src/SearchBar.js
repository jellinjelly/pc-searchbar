import {useState, useEffect} from 'react';
import TypeView from './TypeView';
import { SHOW_PRODUCT_AMOUNT } from './constants';
import './SearchBar.css';

const SearchBar = ({setIsShown, isShown}) => {
  const [data, setData] = useState([]);
  const [searchView, setSearchView] = useState([]);
  const [suggestTypes, setSuggestTypes] = useState([]);

  function handleChange(e){
    if(e.target.value) {
      setIsShown(true)
      let suggestedProducts = []

      for(let product of data) {
        // currently only shows up to 8 products in the dropdown - can be adjusted in constants.js
        if(suggestedProducts.length < SHOW_PRODUCT_AMOUNT) {
          if(product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            suggestedProducts.push(product)
          }
        } else {
          break;
        }
      }

      let typeCounts = {}
      let searchResultView = suggestedProducts.map((item, idx) => {
        // counts number of times the type appears
        typeCounts[item.type] = typeCounts[item.type] + 1 || 1
        let name = item.name.toLowerCase()
        let completed = []
        // split full name by isolating input value
        name = name.split(e.target.value)
        name.forEach((chunck, idx) => {
          if(chunck && idx === 0){
            completed.push(<span key={idx}><b>{chunck}</b></span>)
          } else if(chunck){
            completed.push(<span key={idx}>{e.target.value}<b>{chunck}</b></span>)
          }
        })
        return <a href={item.url} key={item.name + idx}>{completed}</a>
      })
      let sortedTypeCounts = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])
      setSuggestTypes(sortedTypeCounts)
      setSearchView(searchResultView)
    } else {
      setIsShown(false);
    }
  }

  function handleBlur(e) {
    e.target.value = '';
    setIsShown(false)
  }

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/products.json`)
    .then(result => result.json())
    .then(data => setData(data.products))
  }, [])

  return (
    <>
      <input type="text" placeholder="Search..." onChange={handleChange} onBlur={handleBlur} className="search-input"/>
      <div className={`dropdown ${isShown ? 'show' : 'hidden'}`}>
        <TypeView data={suggestTypes}/>
        {searchView}
      </div>
    </>
  )
}

export default SearchBar;