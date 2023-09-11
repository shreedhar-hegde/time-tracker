import { createContext, useEffect, useState } from "react";

export const TasksContext = createContext();

// eslint-disable-next-line react/prop-types
export const TasksContextProvider = ({ children }) => {
  // const tasks = [
  //   { taskId: "task1", text: "Read novel", history: [] },
  //   { taskId: "task2", text: "Read poem", history: [] },
  //   { taskId: "task3", text: "Watch movie", history: [] },
  //   { taskId: "task4", text: "Go for walk", history: [] },
  // ]
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    if (newTask.trim() !== "") {
      const task = {
        id: Date.now(),
        text: newTask,
      };

      setTasks([...tasks, task]);
    }
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TasksContext.Provider>
  );
};
