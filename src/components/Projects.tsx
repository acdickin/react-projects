import colorGuessor from '../assets/guess.webp'
import memoryGame from '../assets/memory-game.webp'
import synonyms from '../assets/synonyms.webp'
import user from '../assets/user.png'
import ProjectInfo from './ProjectInfo'
import { TransitionInSection } from './TransitionSection'

const Projects = () => {
  const projectList = [
    {
      title: 'Users',
      link: '/users',
      name: 'Users',
      description: 'Debounced users search',
      image: user,
    },
    {
      title: 'Synonym Search',
      link: '/synonyms',
      name: 'synonym-search',
      description: 'Simple search for synonyms ',
      image: synonyms,
    },
    {
      title: 'Memory Game',
      link: '/memory-game',
      name: 'memory-name',
      description: 'Matching Card game',
      image: memoryGame,
    },
    {
      title: 'Color Guesser',
      link: '/color-guesser',
      name: 'color-guesser',
      description: 'Game to guess what the hex color is',
      image: colorGuessor,
    },
  ]
  return (
    <div id="projects" className="flex flex-col gap-6 py-6">
      <h2 id="projects" className="text-2xl font-bold md:text-3xl">
        Fun Projects
      </h2>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectList.map((project) => (
          <TransitionInSection direction="fade">
            <ProjectInfo project={project} key={project.name} />
          </TransitionInSection>
        ))}
      </div>
    </div>
  )
}

export default Projects
