function StudentProfile({ student }) {
  return (
    <div className="profile-card">

      <img
        src={student.photo}
        alt="Student"
        className="student-photo"
      />

      <div className="student-info">
        <h1>{student.name}</h1>

        <p className="department">
          {student.department}
        </p>

        <div className="profile-grid">

          <p>
            <strong>Register No:</strong>
            <br />
            {student.registerNo}
          </p>

          <p>
            <strong>Year:</strong>
            <br />
            {student.year}
          </p>

          <p>
            <strong>Batch:</strong>
            <br />
            {student.batch}
          </p>

          <p>
            <strong>College:</strong>
            <br />
            {student.college}
          </p>

          <p>
            <strong>Email:</strong>
            <br />
            {student.email}
          </p>

          <p>
            <strong>Phone:</strong>
            <br />
            {student.phone}
          </p>

        </div>
      </div>

    </div>
  );
}

export default StudentProfile;