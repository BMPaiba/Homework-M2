import React from "react";
import Botones from "./Botones";

const studentName = "Brian";
const techSkills = ["Html", "Css", "JavaScript", "React", "Redux"];
const alerts = { m1: "Aprobado", m2: "En curso" };


export default function Bienvenido() {
  // el código de tu componente acá
  return (
    <div>
      <h1>Soy Henry</h1>
      <h3>{studentName}</h3>
      <ul>
        {techSkills.map((element,index) => {
          return <li key={index}>{element} </li>;
        })}
      </ul>
      <Botones props='alerts'></Botones>
    </div>
  );
}

// Esto lo exportamos para los tests
export { studentName, techSkills, alerts };

