function SemesterSelector({
  semesters,
  selectedSemester,
  setSelectedSemester
}) {
  return (
    <div className="semester-selector">

      {semesters.map((sem) => (
        <button
          key={sem.semester}
          className={
            selectedSemester === sem.semester
              ? "semester-btn active"
              : "semester-btn"
          }
          onClick={() =>
            setSelectedSemester(sem.semester)
          }
        >
          Semester {sem.semester}
        </button>
      ))}

    </div>
  );
}

export default SemesterSelector;