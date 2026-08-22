import email from '../assets/email.webp'
import linkedin from '../assets/linkedin.png'
import resumeImg from '../assets/resume.png'

const resumeUrl = '/AndrewCosmicResume_2026.pdf'

const Contact = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold md:text-3xl">Contact Me</h2>
      <div className="flex flex-row flex-wrap justify-evenly">
        <a href={resumeUrl} download rel="noopener noreferrer">
          <img className="social-img" src={resumeImg} alt="resume" />
        </a>
        <a href="mailto: acdickin@gmail.com">
          {' '}
          <img className="social-img" src={email} alt="linkedin" />
        </a>
        <a
          href="https://www.linkedin.com/in/andrew-cosmic-a8bbb22a/"
          target="_blank"
        >
          <img className="social-img" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  )
}

export default Contact
