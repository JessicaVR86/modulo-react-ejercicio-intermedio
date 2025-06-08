function ListItem( {eachStudents} ) {
  return (
    <>
      <tr className="cell">
        <td className="cell">{eachStudents.name}</td>
        <td className="cell">{eachStudents.counselor} </td>
        <td className="cell">{eachStudents.promo} </td>
      </tr>
    </>
  );
}

export default ListItem;
