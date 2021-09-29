import {useState, useEffect} from 'react';
import TypeView from './TypeView';
import SearchView from './SearchView';
import { SHOW_PRODUCT_AMOUNT } from '../../constants';
import './SearchBar.css';

const SearchBar = ({setIsShown, isShown}) => {
  const [data, setData] = useState([]);
  const [inputVal, setInputVal] = useState('');
  const [searchProducts, setSearchProducts] = useState([]);
  const [suggestTypes, setSuggestTypes] = useState([]);

  function handleChange(e){
    if(e.target.value) {
      let suggestedProducts = []

      for(let product of data.products) {
        // currently only shows up to first 8 matching products in the dropdown - can be adjusted in constants.js
        if(suggestedProducts.length < SHOW_PRODUCT_AMOUNT) {
          if(product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            suggestedProducts.push(product)
          }
        } else {
          break;
        }
      }

      let typeCounts = {}
      suggestedProducts.forEach(item => {
        typeCounts[item.type] = typeCounts[item.type] + 1 || 1
      })
      let sortedTypeCounts = Object.entries(typeCounts).sort((a, b) => b[1] - a[1])
      setIsShown(true)
      setSuggestTypes(sortedTypeCounts)
      setSearchProducts(suggestedProducts)
      setInputVal(e.target.value)
    } else {
      setIsShown(false);
    }
  }

  function handleOnOptionFocus(e){
    e.target.setAttribute('aria-selected', true);
  }

  function handleOnOptionBlur(e){
    e.target.setAttribute('aria-selected', false);
  }

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/products.json`)
    .then(result => result.json())
    .then(data => setData(data))
    .catch(err => err)
    if(!isShown){
      setInputVal('')
    }
  }, [isShown])

  return (
    <>
      <input id='dropdownMenuInput' type="text" value={inputVal} placeholder="Search..." onChange={handleChange} className="search-input" aria-autocomplete='list' role='combobox' aria-expanded={isShown}/>
      <div className={`dropdown ${isShown ? 'show' : 'hidden'}`} aria-labelledby='dropdownMenuInput'>
        { data ? (
          <span data-testid="resolved">
            <TypeView data={suggestTypes} handleOnOptionFocus={handleOnOptionFocus} handleOnOptionBlur={handleOnOptionBlur} />
            <SearchView data={searchProducts} inputVal={inputVal} handleOnOptionFocus={handleOnOptionFocus} handleOnOptionBlur={handleOnOptionBlur}/>
          </span>
        ) : null}
      </div>
    </>
  )
}

export default SearchBar;