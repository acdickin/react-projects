import synonyms from "../assets/synonyms.webp";
import memoryGame from "../assets/memory-game.webp";
import colorGuessor from "../assets/guess.webp";
import user from "../assets/user.png"
import ProjectInfo from "./ProjectInfo";
const Projects = () => {
  const projectList = [
    {
      title: "Users",
      link: "/users",
      name: "Users",
      description: "Debounced users search",
      image: user,
    },
    {

      title: "Synonym Search",
      link: "/synonyms",
      name: "synonym-search",
      description: "Simple search for synonyms ",
      image: synonyms,
    },
    {

      title: "Memory Game",
      link: "/memory-game",
      name: "memory-name",
      description: "Card game where you want to find all the matches",
      image: memoryGame,
    },
    {
  
      title: "Color Guesser",
      link: "/color-guesser",
      name: "color-guesser",
      description: "Game to guess what the hex color is",
      image: colorGuessor,
    },
  ];
  return (
    <div id="projects">
      <h2 id="projects">Fun Projects</h2>
      <div className="projects">
        {projectList.map((project) => (
          <ProjectInfo project={project} key={project.name} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
