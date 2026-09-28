function FilterBar({
  filter,
  setFilter
}) {

  const filters = [
    "All",
    "Pending",
    "Completed",
    "High"
  ];

  return (

    <div className="filter-bar">

      <div>

        <h2>
          My Tasks
        </h2>

        <p>
          Stay organized and productive
        </p>

      </div>


      <div className="filters">

        {filters.map((item) => (

          <button
            key={item}
            className={
              filter === item
                ? "filter active"
                : "filter"
            }
            onClick={() =>
              setFilter(item)
            }
          >
            {item}
          </button>

        ))}

      </div>

    </div>

  );
}

export default FilterBar;