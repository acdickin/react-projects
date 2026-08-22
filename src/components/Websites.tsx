import chat from '../assets/chatapp.webp'
import exerciseBuddy from '../assets/gym.webp'
import knowledge from '../assets/knowledge.webp'
import { FullBleed } from './FullBleed'
import { TransitionInSection } from './TransitionSection'

const Websites = () => {
  return (
    <FullBleed className="bg-slate-200 text-slate-900">
      <div className="flex flex-col gap-8 py-6 " id="websites">
        <h2 className="text-2xl font-bold md:text-3xl">Websites</h2>

        <a
          href="https://myexercisebuddy.netlify.app/"
          target="_blank"
          className="block overflow-hidden p-12 shadow-xl transition-shadow hover:shadow-2xl bg-white"
        >
          <TransitionInSection>
            <img
              src={exerciseBuddy}
              alt="My Exercise Buddy"
              className="mx-auto block h-auto w-full max-w-[400px]"
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <h3>My Exercise Buddy</h3>
              <div className="flex flex-row flex-wrap justify-around">
                <button className="mx-5 my-2">React</button>
                <button className="mx-5 my-2">MUI</button>
                <button className="mx-5 my-2">rapidapi</button>
              </div>
              <p className="px-10">
                An app that lets you search for workouts. You can target muscle
                groups or equipment. Each workout includes a video and related
                workouts
              </p>
            </div>
          </TransitionInSection>
        </a>

        <a
          href="https://chat-project-qdn7.onrender.com/login"
          target="_blank"
          className="block overflow-hidden p-12 shadow-lg transition-shadow hover:shadow-xl bg-white"
        >
          <TransitionInSection direction="right">
            <img
              src={chat}
              alt="Chat App"
              className="mx-auto block h-auto w-full max-w-[400px]"
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <h3>Chat app</h3>
              <div className="flex flex-row flex-wrap justify-around">
                <button className="mx-5 my-2">MERN</button>
                <button className="mx-5 my-2">socket.Io</button>
                <button className="mx-5 my-2">JWT</button>
                <button className="mx-5 my-2">Tailwind</button>
              </div>
              <p className="px-10">
                A chat app built with the MERN stack. It allows users to create
                accounts, log in, and chat with other users in real-time. It
                uses socket.io for real-time communication and JWT for
                authentication.
              </p>
            </div>
          </TransitionInSection>
        </a>

        <a
          href="https://knowledge.liveperson.com/"
          target="_blank"
          className="block overflow-hidden p-12 shadow-lg transition-shadow hover:shadow-xl bg-white"
        >
          <TransitionInSection>
            <img
              src={knowledge}
              alt="Knowledge center - Liveperson"
              className="mx-auto block h-auto w-full max-w-[400px]"
            />

            <div className="flex flex-col items-center justify-center gap-4">
              <h3>Knowledge center - Liveperson</h3>
              <div className="flex flex-row flex-wrap justify-around">
                <button className="mx-5 my-2">React</button>
                <button className="mx-5 my-2">Tailwind</button>
                <button className="mx-5 my-2">Graphql</button>
                <button className="mx-5 my-2">Express</button>
                <button className="mx-5 my-2">NodeJs</button>
              </div>
              <p className="px-10">
                Liveperson knowledge center site. Helps users understand how
                they can use Liveperson Conversational Cloud{' '}
              </p>
            </div>
          </TransitionInSection>
        </a>
      </div>
    </FullBleed>
  )
}

export default Websites
