import './TypeView.css';

const TypeView = ({data, handleOnOptionFocus, handleOnOptionBlur}) => {
  let categoriesView = [];
  data.forEach((type, idx) => {
    let categories = type[0].toLowerCase()
    let categoriesWithoutUnderscore = type[0].toLowerCase().split('_').join(' ')
    // display categories in dropdown
    categoriesView.push(<a key={categories} href={`/categories/${categories}`} onFocus={handleOnOptionFocus} onBlur={handleOnOptionBlur} aria-label='dropdown menu item' role='option' aria-selected={false} aria-posinset={idx+1} aria-setsize={data.length} className='list-type'>in <i>{categoriesWithoutUnderscore}</i></a>)
  })

  return (
    <div className="type-container">
      {categoriesView}
    </div>
  )
}

export default TypeView;