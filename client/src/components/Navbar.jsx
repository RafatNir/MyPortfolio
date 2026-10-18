// Navbar: site-wide navigation bar shown on every page
import { NavLink } from "react-router-dom";
import "./Navbar.css";

// Each entry is [label, route path]; mapped below to build the links
const navigationLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Education", "/education"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

function Navbar() {
  return (
    <header className="site-header">
      {/* Custom logo: initials in a coloured circle, links back to Home */}
      <NavLink className="brand" to="/" aria-label="Rafat home">
        <span className="brand-mark">RI</span>
        <span>Rafat I.</span>
      </NavLink>

      <nav className="navbar" aria-label="Main navigation">
        {navigationLinks.map(([label, path]) => (
          <NavLink
            key={path}
            to={path}
            end={path === "/"} // keeps Home from highlighting on every page
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;