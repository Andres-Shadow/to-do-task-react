import TaskCard from './TaskCard'
import {useContext} from 'react'
import {AppContext} from '../context/AppContext'

function TaskList() {

  const {tasks} = useContext(AppContext)

  if (tasks.length === 0) {
    return (
      <div className='text-white text-4xl font-bold text-center'>
        <p>No hay tareas</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 content-center">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
