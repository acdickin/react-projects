import { NavLink } from "react-router-dom"
import "../App.css"
import linkedin from '../assets/linkedin.png'
import email from '../assets/email.png'
import resumeImg from '../assets/resume.png'
import resume from '../assets/ResumeAndrewCosmic.pdf'

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
        <a href={resume}>
          <img className="social-img" src={resumeImg} alt="resume" />
        </a>
        <a href="mailto: acdickin@gmail.com"> <img className="social-img" src={email} alt="linkedin" /></a>
        <a href="https://www.linkedin.com/in/andrew-cosmic-a8bbb22a/" target="_blank">
          <img className="social-img" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}
export default Header;