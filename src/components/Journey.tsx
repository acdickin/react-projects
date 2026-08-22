import fun from '../assets/fun-me.webp'
import { FullBleed } from './FullBleed'
import { TransitionInSection } from './TransitionSection'
const Journey = () => {
  return (
    <FullBleed className="bg-slate-200 text-slate-900">
      <TransitionInSection>
        <div
          className="flex flex-col justify-evenly py-6 min-[1280px]:flex-row"
          id="journey"
        >
          <img
            src={fun}
            alt=" long image of me"
            className="mx-auto my-2.5 block h-auto w-full max-w-[400px] rounded-[25px] md:max-w-[500px]"
          />

          <div className="flex flex-col items-center justify-center gap-4 p-12 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">
              My Engineering Journey
            </h2>
            <div className="text-left">
              <p>
                My interest in technology started early, growing up around
                computers and experimenting with programming from a young age.
                After exploring different paths, I eventually returned to
                software engineering and built my career around creating web
                applications. Today, I combine my frontend expertise with
                backend and cloud experience to build complete, scalable
                solutions.
              </p>
            </div>
            <br />
          </div>
        </div>
      </TransitionInSection>
    </FullBleed>
  )
}

export default Journey
