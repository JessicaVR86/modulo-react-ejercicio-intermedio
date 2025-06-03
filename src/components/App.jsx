import "../styles/App.scss";
import Adalabers from "../components/Mates.json";
import { useState } from "react";




function App() {
  const [name, setName] = useState("");
  const [counselor, setCounselor] = useState("");

  const handleInputName = (ev) =>{
    setName(ev.target.value);
    }
    

  return (
    <>
      <h3 className="title">Adalabers Promo 53</h3>
      <form>
        <label htmlFor="filter_text">Nombre:</label>
        <input type="text" name="filter" id="filter" onInput={handleInputName} />
        <label> Escoger una tutora:</label>
        <select className="teacher"></select>
      </form>
      <table className="container-grid">
        <thead>
          <tr className="cell">
            <th className="cell">Alumno</th>
            <th className="cell">Tutor</th>
            <th className="cell">Promo</th>
          </tr>
        </thead>
        <tbody>
          {/*Adalabers.results.filter ((student) => student.name.includes((name)))*/}
          {Adalabers.results.map((EachStudent, index) => (
            <tr key={index} className="cell">
              <td className="cell">{EachStudent.name}</td>
              <td className="cell">{EachStudent.counselor} </td>
              <td className="cell">{EachStudent.promo} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
