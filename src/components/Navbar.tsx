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
    </nav>
  );
};

export default Navbar;
