import React, { useState, useRef } from 'react'
const TIMEOUT = 500;
const SLIDES=[
  "https://picsum.photos/id/10/300/100",
  "https://picsum.photos/id/20/300/100",
  "https://picsum.photos/id/30/300/100"
]

const Controls =({slideIndex,setSlide})=>{
  const interval = useRef()

  const incrementSlide =()=>{
    const newIndex = slideIndex + 1
    setSlide(newIndex == SLIDES.length ? 0 : newIndex)
  }
  const handlePrev=()=>{
    const newIndex = slideIndex - 1
    setSlide( newIndex < 0 ? SLIDES.length-1 : newIndex)
  }
  const handleNext = () => {
    incrementSlide();
  }
  const handlePlay=()=>{
    if(!interval.current){
      interval.current = setInterval(incrementSlide, TIMEOUT)
    }
  }
  const handleClear=()=>{
    clearInterval(interval.current)
  }

  return(
    <div>
      <button onClick={() => { handlePrev() }}>prev</button>
      <button onClick={() => { handleNext() }}>next</button>
      <button onClick={() => { handlePlay() }}>play</button>
      <button onClick={() => { handleClear()}}>stop</button>
    </div>
  )
}

const Slide=({slideNum})=> <img src={SLIDES[slideNum]} />

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  console.log(currentSlide)
  return (
    <>
      <Slide slideNum={currentSlide}/>
      <Controls slideIndex={currentSlide} setSlide={setCurrentSlide} />
    </>
  )

}

export default ImageSlider
