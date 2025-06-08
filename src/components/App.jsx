import "../styles/App.scss";
import Adalabers from "../components/Mates.json";
import { useState } from "react";
import List from "./List";

function App() {
  const [students] = useState(Adalabers.results);
  const [studentFilter, setStudentFilter] = useState("");
  const [teacherFilter, setTeacherFilter] = useState("");

  const handleInputStudent = (ev) => {
    setStudentFilter(ev.target.value);
  };

  const handleInputTeacher = (ev) => {
    setTeacherFilter(ev.target.value);
  };

  const filteredStudents = 
  students.filter((eachAdalaber) =>
    eachAdalaber.name.toLocaleLowerCase().includes(studentFilter.toLocaleLowerCase())).filter ((eachAdalaber) => eachAdalaber.counselor.includes (teacherFilter));

  return (
    <>
      <h3 className="title">Adalabers Promo 53</h3>
      <form className="form">
        <label htmlFor="filter">Nombre: </label>
        <input
          type="text"
          name="filter"
          id="filter"
          onInput={handleInputStudent}
          placeholder=" Busca a tu compañera " className="textinput"
        />
        <label htmlFor="teacher"> Escoger una tutora: </label>
        <select name="teacher" id="teacher" className="textinput" onInput={handleInputTeacher}>
          <option value=""> AdaProfe </option>
          <option value="Dayana"> Dayana </option>
          <option value="Iván"> Iván </option>
        </select>
      </form>
      <List students={filteredStudents} />
    </>
  );
}

export default App;
