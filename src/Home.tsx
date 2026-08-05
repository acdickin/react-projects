import "./App.css";
import Websites from "./components/Websites";
import Projects from "./components/Projects";
import HeroBanner from "./components/HeroBanner";
import ImageSlider from "./components/ImageSlider";
import Contact from "./components/Contact";
import Journey from "./components/Journey";
import SoundCloudWidget from "./components/SoundCloudWidget";
const Home = () => {
  return (
    <div className="app">
      <HeroBanner />
      <Websites />
      <Projects />
      <Journey />
      <SoundCloudWidget />
      <ImageSlider />
      <Contact />
    </div>
  );
};
export default Home;
