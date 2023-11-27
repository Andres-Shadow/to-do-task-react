import { useState } from "react";

function TaskForm({ createTask }) {
  const [TaskTitle, setTaskTtile] = useState("");
  const [TaskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(TaskTitle, TaskDescription);
    setTaskDescription("");
    setTaskTtile("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre de la tarea"
          onChange={function (e) {
            setTaskTtile(e.target.value);
          }}
          value={TaskTitle}
        />
        <input
          type="text"
          placeholder="Descripcion de la tarea"
          onChange={function (e) {
            setTaskDescription(e.target.value);
          }}
          value={TaskDescription}
        />
        <button>Agergar Tarea</button>
      </form>
    </div>
  );
}

export default TaskForm;
