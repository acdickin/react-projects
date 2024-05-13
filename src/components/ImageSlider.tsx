import { useState } from 'react'
import slide1 from '../assets/slide1.jpg'
import slide2 from '../assets/slide2.jpg'
import slide3 from '../assets/slide3.jpg'
import slide4 from '../assets/slide4.jpg'

const SLIDES = [
  slide1,
  slide2,
  slide3,
  slide4
]

const Controls = ({ slideIndex, setSlide }: any) => {

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
  return (
    <div className='button-list'>
      <button onClick={() => { handlePrev() }}>prev</button>
      <button onClick={() => { handleNext() }}>next</button>
    </div>
  )
}

const Slide = ({ slideNum }: any) => <img src={SLIDES[slideNum]} style={{ height: '600px' }} />

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <>
      <h2>Synths, Guitars and Skateboards</h2>
      <Slide slideNum={currentSlide} />
      <Controls slideIndex={currentSlide} setSlide={setCurrentSlide} />
    </>
  )

}

export default ImageSlider
