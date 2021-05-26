import React, { Component } from "react";
import Listadenotas from "./components/listadenotas";
import Formulario from "./components/formulario/formulario";
import "./assets/index.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      notas: [],
    }; //pede pra renderizar, já que não é cert usar o this.render
  }

  criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado); //atualiza o estado interno desse componente
  }
  //criando um objeto que contém titulo e texto

  render() {
    return (
      <section className="conteudo">
        <Formulario criarNota={this.criarNota.bind(this)} />
        <Listadenotas notas={this.state.notas} />
      </section>
    );
  }
}

export default App;
