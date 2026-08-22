import me from '../assets/background-removed.webp'
import background from '../assets/background.webp'
const HeroBanner = () => {
  return (
    <div
      className="relative left-1/2 box-border w-screen -translate-x-1/2 bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col gap-4 px-4 pt-4 text-white leading-loose md:px-24 md:pt-40 lg:flex-row">
        <div className="min-w-0 lg:flex-1 flex flex-col gap-4 lg:mt-36 lg:gap-6">
          <h2 className="text-2xl font-bold italic md:text-3xl">
            Frontend / Full
            <br />
            Stack Engineer
          </h2>
        </div>
        <div className="min-w-0 lg:flex-1">
          <h1 className="text-xl font-bold md:text-3xl">ANDREW COSMIC</h1>
          <img
            className="mx-auto block h-80 w-full rounded-3xl object-cover object-top md:h-auto md:max-w-[500px]"
            src={me}
            alt="image of me"
          />
        </div>
        <div className="min-w-0 w-full p-8 lg:flex-1 lg:mb-20 lg:flex lg:items-end">
          <p className="md:text-lg">
            I build modern web applications with React, TypeScript, Java, AWS,
            and PostgreSQL. I'm passionate about creating intuitive user
            experiences, scalable systems, and clean, maintainable code.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
