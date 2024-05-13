import { useState, useRef } from 'react'
const TIMEOUT = 500;
import space1 from '../../assets/space1.webp'
import space2 from '../../assets/space2.webp'
import space3 from '../../assets/space3.webp'
import space4 from '../../assets/space4.jpeg'

const SLIDES = [
  space1,
  space2,
  space3,
  space4
]

const Controls = ({ slideIndex, setSlide }) => {
  const interval = useRef()

  const incrementSlide = () => {
    const newIndex = slideIndex + 1
    setSlide(newIndex == SLIDES.length ? 0 : newIndex)
  }
  const handlePrev = () => {
    const newIndex = slideIndex - 1
    setSlide(newIndex < 0 ? SLIDES.length - 1 : newIndex)
  }
  const handleNext = () => {
    incrementSlide();
  }
  const handlePlay = () => {
    if (!interval.current) {
      interval.current = setInterval(incrementSlide, TIMEOUT)
    }
  }
  const handleClear = () => {
    clearInterval(interval.current)
  }

  return (
    <div className='button-list'>
      <button onClick={() => { handlePrev() }}>prev</button>
      <button onClick={() => { handleNext() }}>next</button>
      <button onClick={() => { handlePlay() }}>play</button>
      <button onClick={() => { handleClear() }}>stop</button>
    </div>
  )
}

const Slide = ({ slideNum }) => <img src={SLIDES[slideNum]} style={{ height: '70%', width: '70%' }} />

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      <h1>Image Slider</h1>
      <Slide slideNum={currentSlide} />
      <Controls slideIndex={currentSlide} setSlide={setCurrentSlide} />
    </>
  )

}

export default ImageSlider
