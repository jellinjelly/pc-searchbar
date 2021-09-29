const SearchView = ({data, inputVal, handleOnOptionFocus, handleOnOptionBlur}) => {
  let searchResultView = data.map((item, idx) => {
    let name = item.name.toLowerCase()
    let completed = []
    // split full name by isolating input value and bolding all values besides input value
    name = name.split(inputVal)
    name.forEach((chunck, idx) => {
      if(chunck && idx === 0){
        completed.push(<span key={idx}><b>{chunck}</b></span>)
      } else if(chunck){
        completed.push(<span key={idx}>{inputVal}<b>{chunck}</b></span>)
      }
    })
    return <a href={item.url} onFocus={handleOnOptionFocus} onBlur={handleOnOptionBlur} key={item.name + idx} aria-label='dropdown menu item' role='option' aria-selected={false}  aria-posinset={idx+1} aria-setsize={data.length} >{completed}</a>
  })

  return (
    <>
      {searchResultView}
    </>
  )
}

export default SearchView;