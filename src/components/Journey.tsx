import fun from '../assets/fun-me.jpg'
const Journey = () => {
    return (
        <div className="heroBanner">
            <img id='journey-img' src={fun} alt=' long image of me' style={{ width: "200px" }} />
            <div style={{ display: 'flex', flexDirection: 'column', padding: ' 0 60px' }}>
                <h2>My Engineering Journey</h2>
                <div style={{ textAlign: 'left' }}>
                    <p>Both my parents were IT professionals, so I was exposed to computers from a very young age. In the early 1980s, my dad bought one of the original IBM PCs with 64K of memory and two 360K floppy disks, which ignited my curiosity about technology.</p>
                    <p>In middle school, I attended a summer IT camp at the University of Michigan, where I learned HTML, CSS, and JavaScript. I was ahead of my classmates and even built a full calculator during the camp. In high school, I took an extracurricular Visual Basic course, further deepening my interest in programming.</p>

                    <p> Although my parents dissuaded me from pursuing IT in college due to concerns about outsourcing, leading me to earn a bachelor's degree in pre-law, my passion for engineering persisted. I returned to school at Seattle Central Community College, where I learned about containerization and Internet protocols. However, the limited course offerings prompted me to transfer to a college in Washington that accepted my credits and offered a Post-Bachelor Studies program in Database Administration.</p>
                    <p>There, I learned object-oriented programming in Java, C#, and .NET, as well as web development and database optimization. This unconventional path, marked by early exposure, continuous self-driven learning, and overcoming initial career misdirection, has profoundly shaped my software development journey.</p>
                </div>
            </div>
        </div >
    )
}

export default Journey