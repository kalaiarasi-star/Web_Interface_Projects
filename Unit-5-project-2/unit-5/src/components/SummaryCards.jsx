function SummaryCards({
  cgpa,
  totalCredits,
  averageGpa,
  attendance
}) {
  return (
    <div className="summary-container">

      <div className="summary-card">
        <span>Final CGPA</span>
        <h2>{cgpa}</h2>
        <small>/ 10.00</small>
      </div>

      <div className="summary-card">
        <span>Average GPA</span>
        <h2>{averageGpa}</h2>
        <small>Across 8 Semesters</small>
      </div>

      <div className="summary-card">
        <span>Total Credits</span>
        <h2>{totalCredits}</h2>
        <small>Credits Earned</small>
      </div>

      <div className="summary-card">
        <span>Attendance</span>
        <h2>{attendance}%</h2>
        <small>Overall Attendance</small>
      </div>

    </div>
  );
}

export default SummaryCards;