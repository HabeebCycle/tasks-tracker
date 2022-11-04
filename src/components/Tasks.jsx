import React from "react";
import TaskContext from "../context/tasks";
import Task from "./Task";

const Tasks = () => {
  const { state } = React.useContext(TaskContext);
  const tasks = state.tasks;

  return (
    <div>
      {tasks.map((task, i) => (
        <Task key={i} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
