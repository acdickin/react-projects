import { useState } from 'react'
import slide1 from '../assets/slide1.webp'
import slide2 from '../assets/slide2.webp'
import slide3 from '../assets/slide3.webp'
import slide4 from '../assets/slide4.webp'
import { FullBleed } from './FullBleed'

const SLIDES = [slide4, slide2, slide3, slide1]

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
    incrementSlide()
  }
  return (
    <div className="flex justify-around">
      <button
        onClick={() => {
          handlePrev()
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleNext()
        }}
      >
        Next
      </button>
    </div>
  )
}

const Slide = ({ slideNum }: any) => (
  <img
    src={SLIDES[slideNum]}
    alt="Featured slide"
    className="mx-auto block h-auto w-full max-w-[600px]"
  />
)

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <FullBleed className="bg-slate-200 text-slate-900">
      <section className="flex flex-col gap-5 py-6">
        <h2 className="text-2xl font-bold md:text-3xl">
          Synths, Guitars and Skateboards
        </h2>
        <Slide slideNum={currentSlide} />
        <Controls slideIndex={currentSlide} setSlide={setCurrentSlide} />
      </section>
    </FullBleed>
  )
}

export default ImageSlider
