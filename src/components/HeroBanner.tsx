import me from "../assets/headshot1.webp";
import '../App.css'

const HeroBanner = () => {
  return (
    <div className="switchback">
      <div className="center-align" style={{ padding: "50px" }}>
        <h1 style={{ marginBottom: "0px" }}>Hi, I'm Andrew Cosmic.</h1>
        <h2
          style={{
            fontWeight: "bold",
            fontStyle: "italic",
            fontSize: "x-large",
          }}
        >
          Frontend / Full Stack Engineer based in Kent, WA
        </h2>
        <p className="heroText">
          I build modern web applications with React, TypeScript, Java, AWS, and
          PostgreSQL. I'm passionate about creating intuitive user experiences,
          scalable systems, and clean, maintainable code.
        </p>
      </div>
   
        <img className="switchback-image" src={me} alt="image of me" />
      
    </div>
  );
};

export default HeroBanner;
