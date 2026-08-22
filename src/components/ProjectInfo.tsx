import { NavLink } from 'react-router-dom'

const ProjectInfo = ({ project }: any) => {
  const { name, title, description, link, image } = project

  return (
    <div className="flex w-full justify-around min-[1280px]:w-[400px]">
      <div className="flex flex-col items-center justify-center md:gap-4">
        <label className="label" htmlFor={name}>
          {title}
        </label>
        <p className="description">{description}</p>

        <NavLink to={link}>
          <img
            id={name}
            className="my-5 h-64 w-full rounded-[20px] border-[thick] border-solid object-contain p-2.5"
            src={image}
            alt={title}
          />
        </NavLink>
      </div>
    </div>
  )
}
export default ProjectInfo
