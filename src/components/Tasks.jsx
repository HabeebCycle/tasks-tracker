import React from "react";
import TaskContext from "../context/tasks";
import Task from "./Task";

const Tasks = () => {
  const { state } = React.useContext(TaskContext);
  const tasks = state.tasks;

  return (
    <div>
      {tasks.length <= 0 && <p>No Task Available</p>}
      {tasks.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
