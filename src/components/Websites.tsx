import exerciseBuddy from '../assets/gym.png'
const Websites = () => {
    return (
        <>
            <h2> Websites</h2>
            <div className="heroBanner" style={{ display: 'flex' }}>

                <a href="https://myexercisebuddy.netlify.app/" target="_blank">
                    <img src={exerciseBuddy} alt="exerciseBuddy" style={{ width: '500px' }} />
                </a>
                <div className='center-align'>
                    <h3>My Exercise Buddy</h3>
                    <p style={{ padding: '0 40px' }}>An app that lets you search for workouts. You can target muscle group or equipments. Each workout includes a video and related workouts</p>
                </div>
            </div >
        </>
    )
}

export default Websites