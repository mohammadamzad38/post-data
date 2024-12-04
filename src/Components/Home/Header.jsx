import { NavLink } from "react-router-dom";
import "./Headers.css";

const Header = () => {
  return (
    <div>
      <span className="">My Beautifull Website</span>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/post">Posts</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </div>
  );
};

export default Header;
