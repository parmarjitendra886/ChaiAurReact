import { NavLink } from "react-router";

const Header = () => {
  return (
    <>
    <nav className="bg-gray-800 text-white py-4 mb-4">
      <h2>My Website</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/news">News</NavLink>
      </div>
    </nav>

    </>
)}

export default Header;