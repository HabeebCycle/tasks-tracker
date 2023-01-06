import React from "react";
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <p>Welcome, {title}</p>
      <Button />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
