function SubjectList(props) {
  return (
    <div>
      <h2>Subject List</h2>

      <ul>
        {props.subjects.map((subject, index) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
}

export default SubjectList;