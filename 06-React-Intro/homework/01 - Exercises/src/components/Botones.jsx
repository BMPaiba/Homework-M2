import React, { Component } from "react";

export default class Botones extends Component {
  render() {
    return (
      <div>
        <button onClick={(alerts) => alert('Aprobado')}>Módulo 1</button>
        <button onClick={(alerts) => alert('En curso')}>Módulo 2</button>
      </div>
    );
  }
}