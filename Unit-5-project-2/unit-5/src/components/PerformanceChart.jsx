function PerformanceChart({ semesterResults }) {

  return (
    <div className="chart-card">

      <h2>Semester Performance</h2>

      <div className="chart">

        {semesterResults.map((item) => {

          const height = (item.gpa / 10) * 100;

          return (
            <div
              className="bar-container"
              key={item.semester}
            >

              <div
                className="bar"
                style={{
                  height: `${height}%`
                }}
                title={`Semester ${item.semester}: ${item.gpa}`}
              >
                <span>{item.gpa}</span>
              </div>

              <label>
                S{item.semester}
              </label>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default PerformanceChart;