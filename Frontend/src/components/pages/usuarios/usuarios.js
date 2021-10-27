import React, { useEffect, useState } from 'react';
import "./usuarios.css";
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import useAuth from '../../../hooks/useAuth';
import { cargarUsuarios } from '../../../Services/usuarios.service';
import { constants } from '../../../util/Constants';
import axios from 'axios';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



// listarUsuarios = () => {

 // const auth = useAuth();

//   const [usuarios, setUsuarios] = useState([]);

//   const getUsuarios = async () => {
//     try {
//         const { data } = await cargarUsuarios(auth.token);
//         setUsuarios(data.usuarios);

//     } catch ({response: error}){
//       console.log(error);
//     }
//   }
// }

class Users extends React.Component {

  state = {
    usuarios: [],
    modalActualizar: false,
    modalInsertar: false,
    status: false,
    form: {
      user_id: "",
      name: "",
      rol: "",
      email: ""
    },
  };

 componentDidMount = () => {
    this.cargarUsuarios();
  }
  cargarUsuarios(){
      var url = constants.pathApi;
      var request = "/users"
      fetch(url + request)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            this.setState({usuarios: data});
          })
  }

 
  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.usuarios;
    arreglo.map((registro) => {
      if (dato.user_id === registro.user_id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].rol = dato.rol;
      }
      contador++;
    });
    this.setState({ usuarios: arreglo, modalActualizar: false });
  };


  // necesario cambiar token por el de el que se implemente con el login
  eliminar = (dato) => {
      if (window.confirm('Esta seguro de querer eliminar el Usuario')) {
        var url = constants.pathApi;
        var request = "/users/" + dato
        fetch(url + request, {
          method: 'DELETE',
          headers: {
            "accept": "aplication/json",
            "content-Type": "aplication/json",
            "token": "Bearer token: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzVkNzJhNmUwMzU4ZTNmNzIwMDE5YSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTExODI3NywiZXhwIjoxNjM1Mzc3NDc3fQ.cnqviBnUc3oxQW13jHGfbJ3DOiiK7rZb_gZ7LCyxRcw"
          }
        })
          .then(res => res.json())
          .then(usuarios => {
            this.cargarUsuarios();
          })
      }

        
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.user_id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, usuarios: lista });
  }
 
  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
  render() {
    return (
      <div>
        <div>
          <Navbar1 value={{ background: '#D0A2FE' }}
            attribute={{
              nombre1: 'USUARIOS',
              nombre2: 'VENTAS',
              nombre3: 'PRODUCTOS',
              nombre4: 'Cerrar Sesion',
              to1: '/usuariosAdmin',
              to2: '/ventasAdmin',
              to3: '/productosAdmin',
              to4: '/',
            }} />
        </div>

        <div className="sample one horizontal caja1">
          <input type="text" name="search" placeholder="search" />

        </div>

        <div className="dropdown horizontal caja2">
          <button className="algo btn btn-success btn-search btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Consulta
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="#">ID Usuario</Link></li>
            <li><Link className="dropdown-item" to="#">Nombre</Link></li>
            <li><Link className="dropdown-item" to="#">Rol</Link></li>
          </div>
        </div>


        <div class="container">
          <Container>

            <br />
            <br />
            <Table hover responsive bordered value={{ background: '#D0A2FE' }}>
              <thead>
                <tr>
                  <th>ID Usuario</th>
                  <th>Nombre</th>
                  <th>Rol</th>
                  <th>Correo</th>
                  <th>Acción</th>
                </tr>
              </thead>

              <tbody>

                {this.state.status === false && (
                  this.state.usuarios.map((dato) => (
                    <tr key={dato._id}>
                      <td>{dato.user_id}</td>
                      <td>{dato.name}</td>
                      <td>{dato.rol}</td>
                      <td>{dato.email}</td>
                      <td>
                        <Button
                          color="secondary"
                          onClick={() => this.mostrarModalActualizar(dato)}
                        >
                          Editar
                        </Button>{" "}
                        <Button color="danger" onClick={() => this.eliminar(dato._id)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>
            <br />
            <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear Usuario</Button>
          </Container>

          <Modal isOpen={this.state.modalActualizar}>
            <ModalHeader>
              <div><h3>Editar Registro</h3></div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>
                  Id:
                </label>

                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.form.user_id}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Usuario:
                </label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.name}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Correo:
                </label>
                <input
                  className="form-control"
                  name="correo"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.form.email}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                color="info"
                onClick={() => this.editar(this.state.form)}
              >
                Editar
              </Button>
              <Button
                color="danger"
                onClick={() => this.cerrarModalActualizar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>



          <Modal isOpen={this.state.modalInsertar}>
            <ModalHeader>
              <div><h3>Insertar Usuario</h3></div>
            </ModalHeader>

            <ModalBody>
              <FormGroup>
                <label>
                  Id:
                </label>

                <input
                  className="form-control"
                  readOnly
                  type="text"
                  value={this.state.usuarios.length + 1}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Usuario:
                </label>
                <input
                  className="form-control"
                  name="nombre"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Rol:
                </label>
                <input
                  className="form-control"
                  name="rol"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>

              <FormGroup>
                <label>
                  Correo:
                </label>
                <input
                  className="form-control"
                  name="correo"
                  type="text"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                color="info"
                onClick={() => this.insertar()}
              >
                Insertar
              </Button>
              <Button
                className="btn btn-danger"
                onClick={() => this.cerrarModalInsertar()}
              >
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
        </div>
        <Footer value={{ background: '#D0A2FE' }} />

      </div>
    )

  }
}

export default Users;

