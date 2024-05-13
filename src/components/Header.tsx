import { NavLink } from "react-router-dom"
import "../App.css"
const Header = () => {
  return (
    <div className="header">
      <NavLink className="header" to="/">
        <span>Home</span>
      </NavLink>
    </div>
  )
}
export default Header;