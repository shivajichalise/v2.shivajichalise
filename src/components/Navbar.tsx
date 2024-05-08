import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `m-2 ${isActive ? "text-secondary" : "opacity-50"}`
        }
      >
        home
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          `m-2 ${isActive ? "text-secondary" : "opacity-50"}`
        }
      >
        blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `m-2 ${isActive ? "text-secondary" : "opacity-50"}`
        }
      >
        contact
      </NavLink>
    </nav>
  );
};

export default Navbar;
