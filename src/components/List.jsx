import ListItem from "./ListItem";

function List({ students }) {
  return (
    <>
      <table className="container-grid">
        <thead className="index_title">
          <tr className="cell">
            <th className="cell">Alumna</th>
            <th className="cell">Tutor</th>
            <th className="cell">Promo</th>
          </tr>
        </thead>
        <tbody>
          {students.map((eachStudents) => (
            <ListItem key={eachStudents.id} eachStudents={eachStudents} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default List;
