
import synonyms from './assets/synonyms.png'
import memoryGame from './assets/memory-game.png'
import { NavLink } from 'react-router-dom'
import "./App.css"
const Home =()=>{
return (
  <>
  <h1>Apps</h1>
    <div className='project-list'>
      <div className="project-card">
      <label className="label" htmlFor="synoym-search">Synoym Search</label>
      <NavLink to='/synonyms'>       
        <img id="synoym-search" className='project' src={synonyms}/>
      </NavLink>
      </div>
      <div className="project-card">
        <label className="label" htmlFor="memory-name">Memory Game</label>
        <NavLink to='/memory-game'>
          
          <img id="memory-name" className='project' src={memoryGame} />
        </NavLink>
      </div>
    </div>
    </>
)
}
export default Home;