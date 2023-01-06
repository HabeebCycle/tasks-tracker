import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const HomePage = () => {
  return (
    <div>
      <h1>Task Tracker</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam,
      </p>
      <div className="auth-links">
        <Link to="/login">
          <Button label="Login" color="gray" width="30px" />
        </Link>
        <Link to="/register">
          <Button label="Register" color="gray" />
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
