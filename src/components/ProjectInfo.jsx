import { NavLink } from 'react-router-dom'
import '../App.css'
const ProjectInfo = ({ project }) => {

    const { name, title, description, link, image } = project

    return (
        <div className={"project-card"}>
            <div className="center-align" >
                <label className="label" htmlFor={name}>{title}</label>
                <p className="description">{description}</p>

                <NavLink to={link}>
                    <img id={name} className='project' src={image} />
                </NavLink>
            </div>
        </div>
    )
}
export default ProjectInfo;