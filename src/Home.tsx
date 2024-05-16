import "./App.css"
import Websites from './components/Websites'
import Projects from "./components/Projects";
import HeroBanner from "./components/HeroBanner"
import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
const Home = () => {
    return (
        <>
            <HeroBanner />
            <Journey />
            <Websites />
            <Projects />
            <ImageSlider />
            <Contact />
        </>
    )
}
export default Home;