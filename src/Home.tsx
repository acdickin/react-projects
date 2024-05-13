import "./App.css"
import Projects from "./components/Projects";
import HeroBanner from "./components/HeroBanner"
import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
const Home = () => {
    return (
        <>
            <HeroBanner />
            <Projects />
            <ImageSlider />
            <Contact />
        </>
    )
}
export default Home;