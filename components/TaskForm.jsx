import { useState, useContext } from "react"
import { AppContext } from "../context/AppContext"


function TaskForm(){
  const [TaskTitle, setTaskTtile] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");
  const { createTask } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(TaskTitle, TaskDescription);
    setTaskDescription("");
    setTaskTtile("");
  };

  return (
    <div className="max-w-md m-auto">
      <div className="bg-slate-800 p-10 mb-4 rounded-md">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          onChange={function (e) {
            setTaskTtile(e.target.value);
          }}
          value={TaskTitle}
          className="bg-slate-300 p-3 w-full mb-3 rounded-md text-black"
        />
        <input
          type="text"
          placeholder="Descripcion de la tarea"
          onChange={function (e) {
            setTaskDescription(e.target.value);
          }}
          value={TaskDescription}
          className="bg-slate-300 p-3 w-full mb-3 rounded-md text-black"
        />
        <button
        className="bg-green-400 text-white p-3 rounded-md w-full hover:bg-green-300"
        >Agergar Tarea</button>
      </form>
    </div>
    </div>
  );
}

export default TaskForm;
