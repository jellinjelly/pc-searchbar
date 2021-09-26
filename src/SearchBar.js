import {useState, useEffect} from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [data, setData] = useState([]);
  const [searchView, setSearchView] = useState([]);

  function handleChange(e){
    if(e.target.value) {
      e.target.nextSibling.style.display = 'block';
      let suggestedProducts = []
      for(let product of data) {
        if(suggestedProducts.length < 10) {
          if(product.name.toLowerCase().includes(e.target.value.toLowerCase())) {
            suggestedProducts.push(product)
          }
        } else {
          break;
        }
      }
      let html = suggestedProducts.map((item, idx) => {
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
      setSearchView(html)
    } else {
      e.target.nextSibling.style.display = 'none';
    }
  }

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/products.json`)
    .then(result => result.json())
    .then(data => setData(data.products))
  }, [])

  return (
    <>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <div className="dropdown">
        {searchView}
      </div>
    </>
  )
}

export default SearchBar;