import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header >
      <Link to={"/"} >
        <h1>Chilectras</h1>
      </Link>

      <nav>
        <ul >
          <li>
            <NavLink to={`categoria/luces`}  > Luces </NavLink>
          </li>

          <li>
            <NavLink to={`categoria/baterias`} > Baterias </NavLink>
          </li>

          <li>
            <NavLink to={`categoria/camaras`} > Camaras </NavLink>
          </li>

          <li>
            <NavLink to={`categoria/sensores`} > Sensores </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar