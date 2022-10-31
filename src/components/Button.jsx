import React from "react";
import PropTypes from "prop-types";

const Button = ({ color, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  label: "Add",
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
