import {useContext} from 'react'
import {AppContext} from '../context/AppContext'

function TaskCard({ task }) {

  const {deleteTask} = useContext(AppContext)

  function handleDelete() {
    deleteTask(task.id);
  }

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={handleDelete}>Eliminar tarea</button>
    </div>
  );
}

export default TaskCard;
