function SemesterSummary({
  subjects,
  semesterGpa,
  totalCredits
}) {

  const passed = subjects.every(
    (subject) => subject.grade !== "F"
  );

  return (
    <div className="semester-summary">

      <div>
        <span>Semester GPA</span>
        <strong>{semesterGpa}</strong>
      </div>

      <div>
        <span>Credits</span>
        <strong>{totalCredits}</strong>
      </div>

      <div>
        <span>Subjects</span>
        <strong>{subjects.length}</strong>
      </div>

      <div>
        <span>Status</span>

        <strong className={passed ? "pass" : "fail"}>
          {passed ? "PASS" : "FAIL"}
        </strong>
      </div>

    </div>
  );
}

export default SemesterSummary;