import '../App.css'
import fun from "../assets/fun-me.webp";
import resume from "../assets/ResumeAndrewCosmic-2026.pdf";
const Journey = () => {
  return (
    <div className="switchback" style={{ justifyContent: "space-evenly" }}>
      <img
        src={fun}
        alt=" long image of me"
        className="switchback-image"
      />
      <div
      className="center-align"
        style={{ display: "flex", flexDirection: "column",  justifyContent: "center", padding:"50px" }}
      >
        <h2>My Engineering Journey</h2>
        <div style={{ textAlign: "left" }}>
          <p>
            My interest in technology started early, growing up around computers
            and experimenting with programming from a young age. After exploring
            different paths, I eventually returned to software engineering and
            built my career around creating web applications. Today, I combine
            my frontend expertise with backend and cloud experience to build
            complete, scalable solutions.
          </p>
        </div>
        <br />
        <a href={resume}>
          <button> Download My resume</button>
        </a>
      </div>
    </div>
  );
};

export default Journey;
