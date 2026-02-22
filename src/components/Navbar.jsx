import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" height={50}/> 
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
        {/* <Link to="/profile">Profile</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;
