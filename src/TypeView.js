import './TypeView.css';

const TypeView = (props) => {
  const {data} = props;
  return (
    <div className="type-container">
    {data.map((type, idx, arr) => {
      return <a href="https://google.com" className='list-type'>in <i>{type[0].toLowerCase().split('_').join(' ')}</i></a>
    })}
    </div>
  )
}

export default TypeView;