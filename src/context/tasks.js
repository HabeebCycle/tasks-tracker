import React, { useReducer, createContext } from "react";
import { reducer } from "./reducer";

const initialState = {
  tasks: [],
};

const TaskContext = createContext();

export const TaskProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const store = { state, dispatch };
  return (
    <TaskContext.Provider value={store}>{props.children}</TaskContext.Provider>
  );
};

export default TaskContext;
