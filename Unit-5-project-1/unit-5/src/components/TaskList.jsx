import TaskCard from "./TaskCard";

function TaskList({
  tasks,
  toggleTask,
  deleteTask
}) {

  if (tasks.length === 0) {

    return (

      <div className="empty">

        <div>
          📝
        </div>

        <h2>
          No tasks found
        </h2>

        <p>
          Try changing your filter or create a new task.
        </p>

      </div>

    );

  }


  return (

    <div className="task-list">

      {tasks.map((task) => (

        <TaskCard
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />

      ))}

    </div>

  );
}

export default TaskList;