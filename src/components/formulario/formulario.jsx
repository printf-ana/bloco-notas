import React, { Component } from "react";
import "./estilo.css";
class Formulario extends Component {
  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
  }
  handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }
  handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
  }
  criarNota(evento) {
    evento.preventDefault(); //previne o comportamento padrão de recarregar a página
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto);
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={this.criarNota.bind(this)}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
          /*toda vez que esse input mudar, chama o metodo da classe*/
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota:"
          className="form-cadastro_input"
          onChange={this.handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default Formulario;
