import { useState } from "react";
import "./Attendance.css";

function Attendance() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aradhana", status: "Present" },
    { id: 2, name: "Bhavani", status: "Absent" },
    { id: 3, name: "Charu", status: "Present" },
    { id: 4, name: "Deepa", status: "Absent" },
    { id: 5, name: "Elakhiya", status: "Present" },
    { id: 6, name: "Faizza", status: "Absent" },
    { id: 7, name: "Geetha", status: "Present" },
    { id: 8, name: "Haripriya", status: "Absent" },
    { id: 9, name: "Isha", status: "Present" },
    { id: 10, name: "Judith", status: "Absent" },
    { id: 11, name: "Kalaiarasi", status: "Present" },
    { id: 12, name: "Lathika", status: "Absent" },
    { id: 13, name: "Manisha", status: "Present" },
    { id: 14, name: "Naazia", status: "Absent" },
    { id: 15, name: "Oviya", status: "Present" },
    { id: 16, name: "Priya", status: "Absent" },
    { id: 17, name: "Rachel", status: "Present" },
    { id: 18, name: "Shalini", status: "Absent" },
    { id: 19, name: "Thirulok", status: "Present" },
    { id: 20, name: "Vidhula", status: "Absent" }
  ]);

  // Toggle Present / Absent
  const toggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Present"
                  ? "Absent"
                  : "Present"
            }
          : student
      )
    );
  };

  // Count Present students
  const presentCount = students.filter(
    (student) => student.status === "Present"
  ).length;

  // Count Absent students
  const absentCount = students.filter(
    (student) => student.status === "Absent"
  ).length;

  return (
    <div className="attendance-container">

      <div className="attendance-card">

        {/* Heading */}
        <h2>Attendance Tracker</h2>

        {/* Summary */}
        <div className="summary">

          <div className="summary-box">
            <p>Present Students</p>
            <strong>{presentCount}</strong>
          </div>

          <div className="summary-box">
            <p>Absent Students</p>
            <strong>{absentCount}</strong>
          </div>

        </div>

        {/* Student List */}
        <ul className="student-list">

          {students.map((student) => (

            <li
              className="student-item"
              key={student.id}
            >

              {/* Student Name */}
              <span className="student-name">
                {student.id}. {student.name}
              </span>

              {/* Student Status */}
              <span
                className={
                  student.status === "Present"
                    ? "status present"
                    : "status absent"
                }
              >
                {student.status === "Present"
                  ? "Present"
                  : "Absent"}
              </span>

              {/* Toggle Button */}
              <button
                className="toggle-button"
                onClick={() => toggleStatus(student.id)}
              >
                Toggle Status
              </button>

            </li>

          ))}

        </ul>

      </div>

    </div>
  );
}

export default Attendance;