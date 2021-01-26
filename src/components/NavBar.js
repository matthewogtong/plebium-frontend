import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/new-story">Write</Link>
      <Link to="/profile/:id">Profile</Link>
      <Link to="/">Plebium</Link>
    </div>
  );
};

export default NavBar;