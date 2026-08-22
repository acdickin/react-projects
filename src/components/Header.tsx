import { NavLink, useLocation } from 'react-router-dom'
import email from '../assets/email.webp'
import linkedin from '../assets/linkedin.png'

const resumeUrl = '/AndrewCosmicResume_2026.pdf'
const Header = () => {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col flex-wrap justify-between gap-4 my-4 md:flex-row px-2 md:px-8">
      {pathname == '/' ? (
        <div className="flex gap-4 justify-center items-center">
          <div>
            <a className="heading" href="#websites">
              Websites
            </a>
          </div>
          <div>
            {' '}
            <a className="heading" href="#projects">
              Projects
            </a>
          </div>
          <div>
            <a className="heading" href="#journey">
              My Journey{' '}
            </a>
          </div>
          <div>
            <a className="heading" href="#music">
              Music
            </a>
          </div>
          <div>
            <a className="heading" href="#hobbies">
              Hobbies
            </a>
          </div>
        </div>
      ) : (
        <NavLink className="heading" to="/">
          <button>Home</button>
        </NavLink>
      )}

      <div className="flex justify-center items-center gap-6">
        <a href="mailto: acdickin@gmail.com">
          <img className="social-img" src={email} alt="linkedin" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-cosmic-a8bbb22a/"
          target="_blank"
        >
          <img className="social-img" src={linkedin} alt="linkedin" />
        </a>
        <a href={resumeUrl} download rel="noopener noreferrer">
          <button>Resume</button>
        </a>
      </div>
    </div>
  )
}
export default Header
