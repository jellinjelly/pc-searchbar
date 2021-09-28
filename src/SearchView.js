const SearchView = ({data, inputVal}) => {
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
    return <a href={item.url} key={item.name + idx}>{completed}</a>
  })

  return (
    <>
      {searchResultView}
    </>
  )
}

export default SearchView;