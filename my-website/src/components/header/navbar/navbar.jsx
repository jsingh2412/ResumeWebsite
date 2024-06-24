import { NavLink } from "react-router-dom";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="navBarItems">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "activeNavItem" : "nonActiveNavItem"
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "activeNavItem" : "nonActiveNavItem"
        }
      >
        About Me
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "activeNavItem" : "nonActiveNavItem"
        }
      >
        Contact Me
      </NavLink>
    </div>
  );
};

export default NavBar;
