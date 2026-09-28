function TaskCard({
  task,
  toggleTask,
  deleteTask
}) {

  return (

    <div
      className={
        task.completed
          ? "task-card completed"
          : "task-card"
      }
    >

      <button
        className="check"
        onClick={() =>
          toggleTask(task.id)
        }
      >
        {task.completed ? "✓" : ""}
      </button>


      <div className="task-content">

        <div className="task-top">

          <h3>
            {task.title}
          </h3>

          <span
            className={`priority ${task.priority.toLowerCase()}`}
          >
            {task.priority}
          </span>

        </div>


        <p>
          {task.description}
        </p>


        <div className="task-meta">

          <span>
            📁 {task.category}
          </span>

          <span>
            📅 {task.dueDate || "No date"}
          </span>

          <span>
            📊 {task.progress}%
          </span>

        </div>


        <div className="progress">

          <div
            style={{
              width: `${task.progress}%`
            }}
          />

        </div>

      </div>


      <div className="task-actions">

        <button>
          ✏️
        </button>

        <button
          onClick={() =>
            deleteTask(task.id)
          }
        >
          🗑️
        </button>

      </div>

    </div>

  );
}

export default TaskCard;