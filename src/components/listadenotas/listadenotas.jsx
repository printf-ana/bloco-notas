import React, { Component } from "react";
import Cardnota from "../cardnota";
import "./estilo.css";
// .jsx deixa claro que é um componente do react

class Listadenotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {/* {} serve para inserir código JS, mas tem algumas limitações */}
        {this.props.notas.map((nota, index) => {
          return (
            <li className="lista-notas_item" key={index}>
              <Cardnota titulo={nota.titulo} texto={nota.texto} />
            </li>
          );
        })}
      </ul>
    );
  }
}
export default Listadenotas;
