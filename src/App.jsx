import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Tasks } from "./tasks";
import { useState, useEffect } from "react";

function App() {
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
    <div>
      <TaskForm createTask={createTask} />
      <TaskList tasks={tareas} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
