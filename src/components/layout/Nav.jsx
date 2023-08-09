import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="nav-menu">
      <ul className="menu-list">
        <li className="list-item">
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
        <li className="list-item">
          <NavLink to="/dashboard" activeClassName="active">
            Dashboard
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
