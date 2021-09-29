const Overlay = ({isShown, setIsShown, handleClick}) => {
  return (
    <div onClickCapture={handleClick} className={`overlay ${isShown ? 'show' : 'hidden'}`}></div>
  )
}

export default Overlay;