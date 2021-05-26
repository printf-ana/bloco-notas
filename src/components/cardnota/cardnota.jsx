import React, { Component } from "react";
import "./estilo.css";
class Cardnota extends Component {
  render() {
    return (
      <section className="card-nota">
        {/*poderia ser class, mas n é ideal pois o class já é usado na DOM*/}
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}

export default Cardnota;
