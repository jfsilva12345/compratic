import React from 'react';
import './productos.css';
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

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

const data = [
  { IDP: 1, Descripcion: 'Esta es una descripcion breve del producto 1', ValorU: '$ 5000', Estado: 'Disponible'},
  { IDP: 2, Descripcion: 'Esta es una descripcion breve del producto 2', ValorU: '$ 4000', Estado: 'No Disponible'},
  { IDP: 3, Descripcion: 'Esta es una descripcion breve del producto 3', ValorU: '$ 10000', Estado: 'Disponible'},
  { IDP: 4, Descripcion: 'Esta es una descripcion breve del producto 4', ValorU: '$ 70000', Estado: 'Disponible'},
  { IDP: 5, Descripcion: 'Esta es una descripcion breve del producto 5', ValorU: '$ 1000', Estado: 'No Disponible'},
];
class productosUser extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      IDP: "",
      Descripcion: "",
      ValorU: "",
      Estado: "",
    },
  };

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
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.IDP === registro.IDP) {
        arreglo[contador].Descripcion = dato.Descripcion;
        arreglo[contador].ValorU = dato.ValorU;
        arreglo[contador].Estado = dato.Estado;    
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar este elemento: "+dato.IDP);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.IDP === registro.IDP) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.IDP=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };
    render(){
    return (
        <div>
            <div>
            <Navbar1 value={{ background: '#D0A2FE' }} 
            attribute={{
                nombre1: 'PRODUCTOS',
                nombre2: 'VENTAS',
                nombre3: 'USUARIOS',               
                nombre4: 'Cerrar Sesion',
                to1: '/productosAdmin',
                to2: '/ventasAdmin',
                to3: '/usuariosAdmin',
                to4: '/',
            }}/>  
        </div>  

        <div className="sample one textoA horizontal caja1">
                <input type="text" name="search" placeholder="search"/>   

        </div>

        <div className="dropdown horizontal caja2">
          <button className="btn btn-success btn-sm dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Consulta
        </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><Link className="dropdown-item" to="#">ID Usuario</Link></li>
            <li><Link className="dropdown-item" to="#">Nombre</Link></li>
            <li><Link className="dropdown-item" to="#">Rol</Link></li>
          </div>
        </div>


        <div className="container admin">              
        <Container>

          <br />
          <br />
          <Table hover responsive bordered   value={{ background: '#D0A2FE' }}>
            <thead>
              <tr>
                <th>ID Producto</th>
                <th>Descripcion</th>
                <th>Valor Unitario</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.IDP}>
                  <td>{dato.IDP}</td>
                  <td>{dato.Descripcion}</td>
                  <td>{dato.ValorU}</td>
                  <td>{dato.Estado}</td> 
                  <td>
                    <Button
                      color="secondary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Producto</Button>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               ID Producto:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.IDP}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Descripcion: 
              </label>
              <input
                className="form-control"
                name="Descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Descripcion}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Valor Unitario: 
              </label>
              <input
                className="form-control"
                name="ValorU"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ValorU}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="Estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado}
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
           <div><h3>Insertar Producto</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               ID Producto:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.IDP}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Descripcion: 
              </label>
              <input
                className="form-control"
                name="Descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Descripcion}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Valor Unitario: 
              </label>
              <input
                className="form-control"
                name="ValorU"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.ValorU}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Estado: 
              </label>
              <input
                className="form-control"
                name="Estado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Estado}
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


export default productosUser