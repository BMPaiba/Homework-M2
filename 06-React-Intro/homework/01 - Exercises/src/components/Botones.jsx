import React, { Component } from "react";

export default class Botones extends Component {
  render() {
    return (
      <div>
        <button onClick={(alerts) => alert('Haz hecho click al Módulo 1')}>Módulo 1</button>
        <button onClick={(alerts) => alert('Haz hecho click al Módulo 2')}>Módulo 2</button>
      </div>
    );
  }
}