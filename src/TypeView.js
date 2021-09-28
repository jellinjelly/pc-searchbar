import './TypeView.css';

const TypeView = ({data}) => {
  let categoriesView = [];
  data.forEach(type => {
    let categories = type[0].toLowerCase()
    let categoriesWithoutUnderscore = type[0].toLowerCase().split('_').join(' ')
    // display categories in dropdown
    categoriesView.push(<a href={`/categories/${categories}`} className='list-type'>in <i>{categoriesWithoutUnderscore}</i></a>)
  })

  return (
    <div className="type-container">
      {categoriesView}
    </div>
  )
}

export default TypeView;