import '../App.css';
import exerciseBuddy from "../assets/gym.webp";
import knowledge from "../assets/knowledge.webp";
import chat from "../assets/chatapp.webp";
const Websites = () => {
  return (
    <div className="websites">
      <h2> Websites</h2>
      <a
        href="https://myexercisebuddy.netlify.app/"
        target="_blank"
        className="card"
      >
        <img
          src={exerciseBuddy}
          alt="My Exercise Buddy"
          className="website-image"
        />

        <div className="center-align">
          <h3>My Exercise Buddy</h3>
          <div className="websiteButtons">
            <button className="language-buttons">React</button>
            <button className="language-buttons">MUI</button>
            <button className="language-buttons">rapidapi</button>
          </div>
          <p style={{ padding: "0 40px" }}>
            An app that lets you search for workouts. You can target muscle
            groups or equipment. Each workout includes a video and related
            workouts
          </p>
        </div>
      </a>

  
        <a href="https://chat-project-qdn7.onrender.com/login" target="_blank" className="card">
          <img
            src={chat}
            alt="Chat App"
            className="website-image"
          />

          <div className="center-align ">
            <h3>Chat app</h3>
            <div className="websiteButtons">
              <button className="language-buttons">MERN</button>
              <button className="language-buttons">socket.Io</button>
              <button className="language-buttons">JWT</button>
              <button className="language-buttons">Tailwind</button>
            </div>
            <p style={{ padding: "0 40px" }}>
                A chat app built with the MERN stack. It allows users to create accounts, log in, and chat with other users in real-time. It uses socket.io for real-time communication and JWT for authentication.
            </p>
          </div>
        </a>
     

      <a
        href="https://knowledge.liveperson.com/"
        target="_blank"
        className="card "
      >
        <img
          src={knowledge}
          alt="Knowledge center - Liveperson"
          className="website-image"
        />

        <div className="center-align">
          <h3>Knowledge center - Liveperson</h3>
          <div className="websiteButtons">
            <button className="language-buttons">React</button>
            <button className="language-buttons">Tailwind</button>
            <button className="language-buttons">Graphql</button>
            <button className="language-buttons">Express</button>
            <button className="language-buttons">NodeJs</button>
          </div>
          <p style={{ padding: "0 40px" }}>
            Liveperson knowledge center site. Helps users understand how they
            can use Liveperson Conversational Cloud{" "}
          </p>
        </div>
      </a>
    </div>
  );
};

export default Websites;
