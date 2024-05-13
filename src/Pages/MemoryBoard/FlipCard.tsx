import './MemoryBoard.css'
import cardIcon from '../../assets/card.jpeg'

interface props {
  index: number;
  isFlipped: boolean;
  isLocked: boolean;
  isDisabled: boolean;
  handleSelect: Function;
  value: number;
}

const FlipCard = ({ index, isFlipped, isLocked, isDisabled, handleSelect, value }: props) => {
  const handleClick = (e: React.MouseEvent, selected: number) => {
    e.preventDefault()
    if (!isLocked && !isDisabled) {
      console.log(selected)
      handleSelect(selected)
    }
  }

  function shouldFlip(): String {
    return isFlipped ? "" : "flip ";
  }

  return (
    <div className="flip-card" onClick={e => handleClick(e, index)}>
      <div className={`flip-card-inner ${shouldFlip()}`} >
        <div className={`flip-card-front ${shouldFlip()}`}>
          <img src={cardIcon} alt="card image" />
        </div>
        <div className="flip-card-back">
          <h1>{value}</h1>
        </div>
      </div>
    </div>
  )
}

export default FlipCard;