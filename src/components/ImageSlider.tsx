import { useState } from "react";
import slide1 from "../assets/slide1.webp";
import slide2 from "../assets/slide2.webp";
import slide3 from "../assets/slide3.webp";
import slide4 from "../assets/slide4.webp";

const SLIDES = [slide4, slide2, slide3, slide1];

const Controls = ({ slideIndex, setSlide }: any) => {
  const incrementSlide = () => {
    const newIndex = slideIndex + 1;
    setSlide(newIndex == SLIDES.length ? 0 : newIndex);
  };
  const handlePrev = () => {
    const newIndex = slideIndex - 1;
    setSlide(newIndex < 0 ? SLIDES.length - 1 : newIndex);
  };
  const handleNext = () => {
    incrementSlide();
  };
  return (
    <div className="button-list">
      <button
        onClick={() => {
          handlePrev();
        }}
      >
        Prev
      </button>
      <button
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

const Slide = ({ slideNum }: any) => (
  <img
    src={SLIDES[slideNum]}
    alt="Featured slide"
    style={{
      width: "100%",
      maxWidth: "600px",
      height: "auto",
      display: "block",
      margin: "0 auto",
    }}
  />
);

const ImageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section
      className="image-slider"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      <h2>Synths, Guitars and Skateboards</h2>
      <Slide slideNum={currentSlide} />
      <Controls slideIndex={currentSlide} setSlide={setCurrentSlide} />
    </section>
  );
};

export default ImageSlider;
