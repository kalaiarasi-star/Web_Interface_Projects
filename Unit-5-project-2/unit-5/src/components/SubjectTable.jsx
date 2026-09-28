const gradePoints = {
  O: 10,
  "A+": 9,
  A: 8,
  "B+": 7,
  B: 6,
  C: 5,
  F: 0
};

function SubjectTable({ subjects }) {

  return (
    <div className="table-container">

      <table>

        <thead>
          <tr>
            <th>S.No</th>
            <th>Course Code</th>
            <th>Subject</th>
            <th>Credits</th>
            <th>Grade</th>
            <th>Grade Point</th>
            <th>Credit Point</th>
          </tr>
        </thead>

        <tbody>

          {subjects.map((subject, index) => {

            const gradePoint =
              gradePoints[subject.grade];

            const creditPoint =
              subject.credits * gradePoint;

            return (
              <tr key={subject.code}>

                <td>{index + 1}</td>

                <td>
                  <strong>
                    {subject.code}
                  </strong>
                </td>

                <td>{subject.name}</td>

                <td>{subject.credits}</td>

                <td>
                  <span
                    className={`grade grade-${subject.grade.replace(
                      "+",
                      "plus"
                    )}`}
                  >
                    {subject.grade}
                  </span>
                </td>

                <td>{gradePoint}</td>

                <td>{creditPoint}</td>

              </tr>
            );
          })}

        </tbody>

      </table>

    </div>
  );
}

export default SubjectTable;