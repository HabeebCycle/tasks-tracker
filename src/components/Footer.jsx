import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <hr />
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/home">Tasks</Link>
        <Link to="/about">About</Link>
      </div>
      <p>Copyright &copy; 2022</p>
    </footer>
  );
};

export default Footer;
