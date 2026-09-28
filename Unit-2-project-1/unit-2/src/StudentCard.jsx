import "./StudentCard.css";
import Student from "./assets/me.jpeg";
function StudentCard(props) {
  return (
    <div>
      <h2>Student Details</h2>

      <img
        src={props.photo}
        alt="Student"
        width="120"
      />

      <p>Student Name: {props.name}</p>
      <p>Register Number: {props.regNo}</p>
      <p>Department: {props.dept}</p>
      <p>Year: {props.year}</p>
      <p>Semester: {props.semester}</p>
      <p>CGPA: {props.cgpa}</p>
      <p>Attendance: {props.attendance}%</p>
    </div>
  );
}

export default StudentCard;