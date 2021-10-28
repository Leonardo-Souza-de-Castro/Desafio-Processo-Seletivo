import './App.css';
import { Component } from "react";

export default class BuscarUsuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome_usuario: '',
      listarepositorios: [],
      id: 0,
      name: '',
      descricao: '',
      data: '',
      size: ''
    }
  };

  AtualizaNome = async (event) => {

    await this.setState({
      nome_usuario: event.target.value
    });
  }

  buscarusuario = async (event) => {
    event.preventDefault();

    fetch(`https://api.github.com/users/${this.state.nome_usuario}/repos`)

      .then(resposta => resposta.json())

      .then(dados => this.setState({ listarepositorios: dados }))

      .catch(erro => console.log(erro))

    await console.log(this.state.listaRepositorios)
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <section>
          <h1>Digite o seu Username do Github</h1>
          <form onSubmit={this.buscarusuario}>
            <input type="text" placeholder="Username do GitHub" onChange={this.AtualizaNome} />
            <button type="submit">Buscar</button>
          </form>
        </section>
        <section>
          <h2>Listar Repositorios:</h2>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Data de Criação</th>
                <th>Descrição</th>
                <th>Tamanho</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.listarepositorios.map((repositorios) => {
                  //console.log(tipoEvento)
                  return (
                    <tr key={repositorios.id}>
                      <td>{repositorios.id}</td>
                      <td>{repositorios.name}</td>
                      <td>{repositorios.created_at}</td>
                      <td>{repositorios.description}</td>
                      <td>{repositorios.size}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </section>

      </div>
    )
  }
}