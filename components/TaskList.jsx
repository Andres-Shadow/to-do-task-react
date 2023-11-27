import TaskCard from './TaskCard'
import {useContext} from 'react'
import {AppContext} from '../context/AppContext'

function TaskList() {

  const {tasks} = useContext(AppContext)

  if (tasks.length === 0) {
    return (
      <div>
        <p>No hay tareas</p>
      </div>
    )
  }

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
