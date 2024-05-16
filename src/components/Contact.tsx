import linkedin from '../assets/linkedin.png'
import github from '../assets/GitHub.png'
import resume from '../assets/AndrewCosmicResume.pdf'
import email from '../assets/email.png'
import resumeImg from '../assets/resume.png'

const Contact = () => {
    return (
        <div style={{ margin: '40px 0' }}>
            <h2>Contact Me</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
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

export default Contact