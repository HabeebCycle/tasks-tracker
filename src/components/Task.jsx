import React from "react";
import { FaTimes, FaClock, FaList } from "react-icons/fa";

const Task = ({ task }) => {
  return (
    <div className={`task ${task.reminder ? "reminder" : ""}`}>
      <FaList />
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{
            color: "darkred",
            cursor: "pointer",
          }}
        />
      </h3>
      <p>
        <FaClock /> {task.day}
      </p>
    </div>
  );
};

export default Task;
