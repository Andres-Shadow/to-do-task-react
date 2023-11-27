import { createContext, useState, useEffect } from "react";
import { Tasks } from "../data/tasks";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [tareas, setTasks] = useState([]);

  useEffect(() => {
    setTasks(Tasks);
  }, []);


  function createTask(taskTitle, taskDescription) {
    setTasks([
      ...tareas,
      {
        id: tareas.length + 1,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  }

  function deleteTask(taskId) {
    setTasks(tareas.filter((task) => task.id !== taskId));
  }

  return (
    <>
      <AppContext.Provider value={{
          tasks: tareas,
          createTask: createTask,
          deleteTask: deleteTask,
      }}>
        {props.children
        }</AppContext.Provider>
    </>
  );
}
