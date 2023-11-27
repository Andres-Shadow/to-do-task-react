import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(AppContext);

  function handleDelete() {
    deleteTask(task.id);
  }

  return (
    <div className="bg-gray-800 rounded-md ml-5 mr-5 mt-5">
      <h2 className="text-xl font-bold capitalize text-white ml-2 mt-2">{task.title}</h2>
      <p className=" text-gray-300 text-sm ml-3 ">{task.description}</p>
      <button
        className="bg-red-500 rounded-md px-2 py-1 mt-4 mb-3 hover:bg-red-300 ml-2 text-white"
        onClick={handleDelete}
      >
        Eliminar tarea
      </button>
    </div>
  );
}

export default TaskCard;
