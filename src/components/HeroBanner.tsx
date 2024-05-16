import me from '../assets/andrew.png'

const HeroBanner = () => {
  return (
    <div className="heroBanner" style={{ justifyContent: 'space-evenly' }}>
      <div className='center-align' style={{ padding: '50px' }} >
        <h1 style={{ marginBottom: '0px' }}>Andrew Cosmic</h1>
        <p style={{ fontWeight: 'bold', fontStyle: 'italic', fontSize: 'x-large' }}>Full stack Developer</p>
        <p className="heroText">Hey there, I'm Andrew Cosmic, a full stack developer based in Kent, WA. When I'm not crafting code, you can find me jamming out with synthesizers, diving into gaming adventures, and mastering the art of skateboarding. Let's build something awesome together!</p>
      </div>
      <div className="heroBanner-image">
        <img id="heroImage" src={me} alt="image of me" />
      </div>
    </div >
  )
}

export default HeroBanner
