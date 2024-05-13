import linkedin from '../assets/linkedin.webp'
import github from '../assets/GitHub.png'
import resume from '../assets/AndrewCosmic-Resume.pdf'
const Contact = () => {
    return (
        <div style={{ margin: '40px 0' }}>
            <h2>Contact Me</h2>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                <a download={resume}>
                    <button>Download Resume</button>
                </a>
                <p>Phone number: 248-935-8911</p>
                <p>Email: <a href="mailto: name@email.com">acdickin@gmail.com</a></p>
                <a href="https://www.linkedin.com/in/andrew-cosmic-a8bbb22a/" target="_blank">
                    <img className="social-img" src={linkedin} alt="linkedin" />
                </a>
                <a href="https://github.com/acdickin/" target="_blank">
                    <img className="social-img" src={github} alt="github" />
                </a>
                <br />
            </div>
        </div>
    )
}

export default Contact