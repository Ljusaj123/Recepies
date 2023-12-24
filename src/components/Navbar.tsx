import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-x-4 justify-center sm:flex-row flex-col">
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="link">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
