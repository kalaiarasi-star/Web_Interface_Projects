function Stats({ stats }) {

  return (

    <div className="stats">

      <div className="stat-card blue">

        <span>Total Tasks</span>

        <strong>
          {stats.total}
        </strong>

        <small>
          All your tasks
        </small>

      </div>


      <div className="stat-card green">

        <span>Completed</span>

        <strong>
          {stats.completed}
        </strong>

        <small>
          Successfully done
        </small>

      </div>


      <div className="stat-card orange">

        <span>Pending</span>

        <strong>
          {stats.pending}
        </strong>

        <small>
          Need attention
        </small>

      </div>


      <div className="stat-card red">

        <span>High Priority</span>

        <strong>
          {stats.highPriority}
        </strong>

        <small>
          Important tasks
        </small>

      </div>

    </div>

  );
}

export default Stats;