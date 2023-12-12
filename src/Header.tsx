import { NavLink } from "react-router-dom"
import "./App.css"
const Header = () =>{
  return(
    <NavLink className="header" to="/">
      <h1>Andrew's projects</h1>
    </NavLink>
  )
}
export default Header;