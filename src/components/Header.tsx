import { NavLink } from "react-router-dom"
import "../App.css"
import linkedin from '../assets/linkedin.png'
import { useLocation } from 'react-router-dom';
const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="header">
      {
        pathname == "/" ? <div /> :
          <NavLink className="header" to="/">
            <button>Home</button>
          </NavLink>
      }

      <div className="socials">
        <a href="https://www.linkedin.com/in/andrew-cosmic-a8bbb22a/">
          <img className="social-img" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}
export default Header;