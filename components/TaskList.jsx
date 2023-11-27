import TaskCard from './TaskCard'

function TaskList(props) {

  if (props.tasks.length === 0) {
    return (
      <div>
        <p>No hay tareas</p>
      </div>
    )
  }

  return (
    <div>
      {props.tasks.map((task) => (
        <TaskCard key={task.id} task={task} deleteTask={props.deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
