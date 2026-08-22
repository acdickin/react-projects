import Contact from './components/Contact'
import HeroBanner from './components/HeroBanner'
import ImageSlider from './components/ImageSlider'
import Journey from './components/Journey'
import Projects from './components/Projects'
import SoundCloudWidget from './components/SoundCloudWidget'
import Websites from './components/Websites'
const Home = () => {
  return (
    <div className="flex w-full flex-col gap-6 box-border min-[1280px]:gap-12 min-[1280px]:px-4">
      <HeroBanner />
      <Websites />
      <Projects />
      <Journey />
      <SoundCloudWidget />
      <ImageSlider />
      <Contact />
    </div>
  )
}
export default Home
