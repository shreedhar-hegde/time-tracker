import { createContext, useState } from "react";

export const TasksContext = createContext();

// eslint-disable-next-line react/prop-types
export const TasksContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { taskId: "task1", text: "Read novel", history: [] },
    { taskId: "task2", text: "Read poem", history: [] },
    { taskId: "task3", text: "Watch movie", history: [] },
    { taskId: "task4", text: "Go for walk", history: [] },
  ]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
