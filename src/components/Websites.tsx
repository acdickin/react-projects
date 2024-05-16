import exerciseBuddy from '../assets/gym.png'
import knowledge from '../assets/knowledge.png'
const Websites = () => {
    return (
        <div>
            <h2> Websites</h2>
            <div className="heroBanner">
                <a href="https://myexercisebuddy.netlify.app/" target="_blank">
                    <img src={exerciseBuddy} alt="My Exercise Buddy" style={{ width: '500px' }} />
                </a>
                <div className='center-align'>
                    <h3>My Exercise Buddy</h3>
                    <div className='websiteButtons'>
                        <button className="language-buttons">React</button>
                        <button className="language-buttons">MUI</button>
                        <button className="language-buttons">rapidapi</button>
                    </div>
                    <p style={{ padding: '0 40px' }}>An app that lets you search for workouts. You can target muscle groups or equipment. Each workout includes a video and related workouts</p>
                </div>
            </div >
            <div className="heroBanner reverse" >
                <a href="https://knowledge.liveperson.com/" target="_blank">
                    <img src={knowledge} alt="Knowledge center - Liveperson" style={{ width: '500px' }} />
                </a>
                <div className='center-align'>
                    <h3>Knowledge center - Liveperson</h3>
                    <div className='websiteButtons'>
                        <button className="language-buttons">React</button>
                        <button className="language-buttons">Tailwind</button>
                        <button className="language-buttons">Graphql</button>
                        <button className="language-buttons">Express</button>
                        <button className="language-buttons">NodeJs</button>
                    </div>
                    <p style={{ padding: '0 40px' }}>Liveperson  knowledge center site. Helps users understand how they can use Liveperson Conversational Cloud  </p>

                </div>

            </div >

        </div >
    )
}

export default Websites