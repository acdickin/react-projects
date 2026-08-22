import cardIcon from '../../assets/card.webp'

interface props {
  index: number
  isFlipped: boolean
  isLocked: boolean
  isDisabled: boolean
  handleSelect: Function
  value: number
}

const FlipCard = ({
  index,
  isFlipped,
  isLocked,
  isDisabled,
  handleSelect,
  value,
}: props) => {
  const handleClick = (e: React.MouseEvent, selected: number) => {
    e.preventDefault()
    if (!isLocked && !isDisabled) {
      console.log(selected)
      handleSelect(selected)
    }
  }

  function shouldFlip(): String {
    return isFlipped ? '' : '[transform:rotateY(180deg)] '
  }

  return (
    <div
      className="m-2.5 h-[225px] w-[225px] bg-transparent [perspective:1000px]"
      onClick={(e) => handleClick(e, index)}
    >
      <div
        className={`relative h-[225px] w-[225px] text-center [transform-style:preserve-3d] [transition:transform_0.8s] ${shouldFlip()}`}
      >
        <div
          className={`absolute h-full w-full bg-[#463e72] [backface-visibility:hidden] ${shouldFlip()}`}
        >
          <img src={cardIcon} alt="card image" />
        </div>
        <div className="absolute flex h-full w-full items-center justify-center bg-[#463e72] text-white [backface-visibility:hidden]">
          <h1>{value}</h1>
        </div>
      </div>
    </div>
  )
}

export default FlipCard
