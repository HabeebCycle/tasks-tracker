import React from "react";
import Task from "./Task";

const Tasks = () => {
  const tasks = [
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Go for shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Go fishing",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
  ];
  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default Tasks;
