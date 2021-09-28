const Overlay = ({isShown}) => {
  return (
    <div className={`overlay ${isShown ? 'show' : 'hidden'}`}></div>
  )
}

export default Overlay;