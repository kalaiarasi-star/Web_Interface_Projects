import { useEffect, useMemo, useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Stats from "./components/Stats";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterBar from "./components/FilterBar";

import "./App.css";

function App() {

  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [search, setSearch] = useState("");

  const [filter, setFilter] =
    useState("All");

  const [darkMode, setDarkMode] =
    useState(false);


  /* ==========================
     FETCH TASKS
  ========================== */

  useEffect(() => {

    const savedTasks =
      localStorage.getItem("tasks");

    if (savedTasks) {

      setTasks(JSON.parse(savedTasks));

      setLoading(false);

      return;
    }

    fetch("/tasks.json")
      .then((response) =>
        response.json()
      )
      .then((data) => {

        setTasks(data);

        setLoading(false);

      });

  }, []);


  /* ==========================
     SAVE TASKS
  ========================== */

  useEffect(() => {

    if (!loading) {

      localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
      );

    }

  }, [tasks, loading]);


  /* ==========================
     ADD TASK
  ========================== */

  const addTask = (task) => {

    setTasks((previous) => [

      ...previous,

      {
        ...task,
        id: Date.now(),
        completed: false,
        progress: 0,
        subtasks: []
      }

    ]);

  };


  /* ==========================
     DELETE
  ========================== */

  const deleteTask = (id) => {

    setTasks((previous) =>
      previous.filter(
        (task) => task.id !== id
      )
    );

  };


  /* ==========================
     COMPLETE
  ========================== */

  const toggleTask = (id) => {

    setTasks((previous) =>

      previous.map((task) =>

        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
              progress:
                !task.completed
                  ? 100
                  : task.progress
            }
          : task

      )

    );

  };


  /* ==========================
     FILTER TASKS
  ========================== */

  const filteredTasks = useMemo(() => {

    return tasks.filter((task) => {

      const matchesCategory =
        activeCategory === "All" ||
        task.category === activeCategory;

      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesFilter =
        filter === "All" ||

        (filter === "Completed" &&
          task.completed) ||

        (filter === "Pending" &&
          !task.completed) ||

        (filter === "High" &&
          task.priority === "High");

      return (
        matchesCategory &&
        matchesSearch &&
        matchesFilter
      );

    });

  }, [
    tasks,
    activeCategory,
    search,
    filter
  ]);


  /* ==========================
     STATISTICS
  ========================== */

  const stats = useMemo(() => {

    const completed =
      tasks.filter(
        (task) => task.completed
      ).length;

    const pending =
      tasks.length - completed;

    const highPriority =
      tasks.filter(
        (task) =>
          task.priority === "High" &&
          !task.completed
      ).length;

    const completion =
      tasks.length === 0
        ? 0
        : Math.round(
            (completed / tasks.length) *
              100
          );

    return {
      total: tasks.length,
      completed,
      pending,
      highPriority,
      completion
    };

  }, [tasks]);


  if (loading) {

    return (
      <div className="loading">
        Loading TaskFlow...
      </div>
    );

  }


  return (

    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >

      <Sidebar
        activeCategory={
          activeCategory
        }
        setActiveCategory={
          setActiveCategory
        }
        tasks={tasks}
      />


      <main className="main">

        <Header
          search={search}
          setSearch={setSearch}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />


        <div className="content">

          <div className="welcome">

            <div>

              <h1>
                Good Morning, Kalaiarasi 👋
              </h1>

              <p>
                Manage your tasks and stay productive.
              </p>

            </div>

            <div className="date-box">
              <strong>
                September 24
              </strong>

              <span>
                Wednesday
              </span>
            </div>

          </div>


          <Stats
            stats={stats}
          />


          <TaskForm
            addTask={addTask}
          />


          <FilterBar
            filter={filter}
            setFilter={setFilter}
          />


          <TaskList
            tasks={filteredTasks}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />

        </div>

      </main>

    </div>

  );
}

export default App;