function Header({
  search,
  setSearch,
  darkMode,
  setDarkMode
}) {

  return (

    <header className="topbar">

      <div className="search">

        🔍

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <span>
          Ctrl K
        </span>

      </div>


      <div className="header-actions">

        <button>
          🔔
        </button>

        <button
          onClick={() =>
            setDarkMode(!darkMode)
          }
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div className="avatar">
          KS
        </div>

      </div>

    </header>

  );
}

export default Header;