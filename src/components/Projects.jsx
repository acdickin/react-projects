
import synonyms from '../assets/synonyms.png'
import memoryGame from '../assets/memory-game.png'
import slider from '../assets/slider.png'
import colorGuessor from '../assets/guess.png'

import ProjectInfo from "./ProjectInfo"
const Projects = () => {
    const projectList = [
        { key: 1, title: "Synonym Search", link: "/synonyms", name: "synonym-search", description: "Simple search for synomnyms", image: synonyms },
        { key: 2, title: "Memory Game", link: "/memory-game", name: "memory-name", description: "Card game where you want to find all the matches", image: memoryGame },
        { key: 3, title: "Image Slider", link: "/image-slider", name: "image-slider", description: "Image slider", image: slider },
        { key: 4, title: "Color Guesser", link: "/color-guesser", name: "color-guesser", description: "Game to guess what the hex color is", image: colorGuessor },
    ]
    return (
        <>
            <h2 id="projects">Projects</h2>
            <div className='projects'>
                {projectList.map(project => <ProjectInfo project={project} key={project.key} />)}
            </div>
        </>
    )
}

export default Projects

{/* <div className="project-card">
<label className="label" htmlFor="memory-name">Memory Game</label>
<NavLink to='/memory-game'>
    <img className='project' src={memoryGame} />
</NavLink>
</div> */}

{/* <div className="project-card">
              <label className="label" htmlFor="-">Color Guesser</label>
              <NavLink to='/color-guesser'>
      
              </NavLink>
            </div>
            <div className="project-card">
              <label className="label" htmlFor="-">Color Guesser</label>
              <NavLink to='/image-slider'>
              </NavLink>
            </div> */}