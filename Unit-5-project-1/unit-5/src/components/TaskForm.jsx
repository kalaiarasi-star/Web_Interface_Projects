import { useState } from "react";

function TaskForm({ addTask }) {

  const [title, setTitle] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [category, setCategory] =
    useState("Study");

  const [priority, setPriority] =
    useState("Medium");

  const [dueDate, setDueDate] =
    useState("");


  const handleSubmit = (e) => {

    e.preventDefault();

    if (!title.trim()) {
      return;
    }

    addTask({
      title,
      description,
      category,
      priority,
      dueDate
    });

    setTitle("");
    setDescription("");
    setDueDate("");

  };


  return (

    <form
      className="task-form"
      onSubmit={handleSubmit}
    >

      <div className="form-title">
        <span>+</span>

        <div>
          <h2>Add New Task</h2>
          <p>
            Create a task and organize your work.
          </p>
        </div>
      </div>


      <div className="form-grid">

        <input
          type="text"
          placeholder="Task title..."
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="text"
          placeholder="Description..."
          value={description}
          onChange={(e) =>
            setDescription(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option>Study</option>
          <option>Work</option>
          <option>Personal</option>

        </select>


        <select
          value={priority}
          onChange={(e) =>
            setPriority(e.target.value)
          }
        >

          <option>Low</option>
          <option>Medium</option>
          <option>High</option>

        </select>


        <input
          type="date"
          value={dueDate}
          onChange={(e) =>
            setDueDate(e.target.value)
          }
        />


        <button type="submit">
          Add Task
        </button>

      </div>

    </form>

  );
}

export default TaskForm;