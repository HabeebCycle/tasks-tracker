import { ADD, DELETE, UPDATE } from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      // action = {type:'ADD', payload:{}}
      return { ...state, tasks: [...state.tasks, action.payload] };
    case DELETE:
      // action = {type:'DELETE', payload:id}
      return {
        ...state,
        tasks: state.tasks.filter((obj) => obj.id !== action.payload),
      };
    case UPDATE:
      // action = {type:'UPDATE', payload:id}
      return {
        ...state,
        tasks: state.tasks.map((obj) => {
          if (obj.id === action.payload) {
            obj.reminder = !obj.reminder;
          }
          return obj;
        }),
      };

    default:
      return state;
  }
};
