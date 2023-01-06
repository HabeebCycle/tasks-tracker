import React from "react";
//import PropTypes from "prop-types";
import TaskContext from "../context/tasks";
import { CHANGE_SHOW_FORM } from "../context/types";

const Button = ({ label, color, widthx }) => {
  const { state, dispatch } = React.useContext(TaskContext);
  const labelText = label ? label : state.showForm ? "Hide Form" : "Add Task";
  const bgColor = color ? color : state.showForm ? "purple" : "green";

  const handleClick = () => {
    dispatch({ type: CHANGE_SHOW_FORM });
  };
  return (
    <button
      onClick={handleClick}
      className="btn"
      style={{ backgroundColor: bgColor }}
    >
      {labelText}
    </button>
  );
};

/*
Button.defaultProps = {
  color: "steelblue",
  label: "Add",
};

Button.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
*/

export default Button;
