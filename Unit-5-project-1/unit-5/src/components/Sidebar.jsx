function Sidebar({
  activeCategory,
  setActiveCategory,
  tasks
}) {

  const categories = [
    {
      name: "All",
      icon: "📋"
    },
    {
      name: "Work",
      icon: "💼"
    },
    {
      name: "Study",
      icon: "📚"
    },
    {
      name: "Personal",
      icon: "🏠"
    }
  ];

  return (

    <aside className="sidebar">

      <div className="logo">

        <div className="logo-icon">
          ✓
        </div>

        <div>
          <h2>TaskFlow</h2>
          <span>Productivity</span>
        </div>

      </div>


      <nav>

        <p className="menu-title">
          TASKS
        </p>

        {categories.map((category) => (

          <button
            key={category.name}
            className={
              activeCategory === category.name
                ? "nav-item active"
                : "nav-item"
            }
            onClick={() =>
              setActiveCategory(
                category.name
              )
            }
          >

            <span>
              {category.icon}
            </span>

            {category.name}

            {category.name === "All" && (
              <b>
                {tasks.length}
              </b>
            )}

          </button>

        ))}


        <p className="menu-title">
          SMART LISTS
        </p>

        <button className="nav-item">
          ⭐ Important
        </button>

        <button className="nav-item">
          📅 Today
        </button>

        <button className="nav-item">
          ⚠️ Overdue
        </button>

      </nav>


      <div className="sidebar-bottom">

        <p>
          Daily Progress
        </p>

        <div className="side-progress">

          <div
            style={{
              width: "68%"
            }}
          />

        </div>

        <small>
          68% completed
        </small>

      </div>

    </aside>
  );
}

export default Sidebar;