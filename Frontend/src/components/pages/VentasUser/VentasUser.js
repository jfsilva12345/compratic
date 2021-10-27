import React from 'react';
import './VentasUser.css';
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
  { IDV: 1, Cantidad: 2, PrecioCU: '$ 5000',  Total: '$ 10000', IDP: 105, Fecha: '06/12/20', IDC: 5698, NombreC: "James", IDVr: 99, Estado: 'Proceso'},
  { IDV: 2, Cantidad: 5, PrecioCU: '$ 4000',  Total: '$ 20000', IDP: 107, Fecha: '08/10/21', IDC: 1235, NombreC: "Mauricio", IDVr: 94, Estado: 'Cancelada'},
  { IDV: 3, Cantidad: 8, PrecioCU: '$ 8000',  Total: '$ 16000', IDP: 102, Fecha: '12/11/20', IDC: 4355, NombreC: "Hector", IDVr: 91, Estado: 'Entregada'},
  { IDV: 4, Cantidad: 1, PrecioCU: '$ 9000',  Total: '$ 9000', IDP: 111, Fecha: '30/11/20', IDC: 5676, NombreC: "Jair", IDVr: 94, Estado: 'Entregada'},
  { IDV: 5, Cantidad: 2, PrecioCU: '$ 5000',  Total: '$ 10000', IDP: 105, Fecha: '06/07/20', IDC: 5658, NombreC: "Diego", IDVr: 91, Estado: 'Cancelada'},
  
];
class VentasUser extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      IDV: "",
      Cantidad: "",
      PrecioCU: "",
      Total: "",
      IDP: "",
      Fecha: "",
      IDC: "",
      NombreC: "",
      IDVr: "",
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
      if (dato.IDV === registro.IDV) {
        arreglo[contador].Cantidad = dato.Cantidad;
        arreglo[contador].PrecioCU = dato.PrecioCU;
        arreglo[contador].Total = dato.Total;
        arreglo[contador].IDP = dato.IDP;
        arreglo[contador].Fecha = dato.Fecha;
        arreglo[contador].IDC = dato.IDC;
        arreglo[contador].NombreC = dato.NombreC;
        arreglo[contador].IDVr = dato.IDVr;
        arreglo[contador].Estado = dato.Estado;
        
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar este elemento: "+dato.IDV);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.IDV === registro.IDV) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.IDV=this.state.data.length+1;
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
            <Navbar1 value={{ background: '#BAFFFB' }} 
            attribute={{
                nombre1: 'VENTAS',
                nombre3: 'PRODUCTOS',               
                nombre4: 'Cerrar Sesion',
                to1: '/ventasAdmin',
                to3: '/productosUser',
                to4: '/',
            }}/>  
        </div>  

        <div className="sample one textoU horizontal caja1">
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


        <div className="container user">              
        <Container>

          <br />
          <br />
          <Table hover responsive bordered   value={{ background: '#D0A2FE' }}>
            <thead>
              <tr>
                <th>ID Venta</th>
                <th>Cantidad</th>
                <th>Precio C/U</th>
                <th>Valor Total</th>
                <th>Id Producto</th>
                <th>Fecha Venta</th>
                <th>Id cliente</th>
                <th>Nombre cliente</th>
                <th>Id vendedor</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.IDV}>
                  <td>{dato.IDV}</td>
                  <td>{dato.Cantidad}</td>
                  <td>{dato.PrecioCU}</td>
                  <td>{dato.Total}</td> 
                  <td>{dato.IDP}</td>
                  <td>{dato.Fecha}</td> 
                  <td>{dato.IDC}</td>
                  <td>{dato.NombreC}</td> 
                  <td>{dato.IDVr}</td>
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
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear Venta</Button>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Venta</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               ID venta:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.IDV}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="Cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Cantidad}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Precio C/U: 
              </label>
              <input
                className="form-control"
                name="PrecioCU"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.PrecioCU}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Valor Total: 
              </label>
              <input
                className="form-control"
                name="Total"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Total}
              />
            </FormGroup>

            <FormGroup>
              <label>
                ID Producto: 
              </label>
              <input
                className="form-control"
                name="IDP"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.IDP}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha Venta: 
              </label>
              <input
                className="form-control"
                name="Fecha"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Fecha}
              />
            </FormGroup>

            <FormGroup>
              <label>
                ID Cliente: 
              </label>
              <input
                className="form-control"
                name="IDC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.IDC}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre Cliente: 
              </label>
              <input
                className="form-control"
                name="NombreC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NombreC}
              />
            </FormGroup>

            <FormGroup>
              <label>
                ID Vendedor: 
              </label>
              <input
                className="form-control"
                name="IDVr"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.IDVr}
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
           <div><h3>Insertar Venta</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               ID venta:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.IDV}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Cantidad: 
              </label>
              <input
                className="form-control"
                name="Cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Cantidad}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Precio C/U: 
              </label>
              <input
                className="form-control"
                name="PrecioCU"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.PrecioCU}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Valor Total: 
              </label>
              <input
                className="form-control"
                name="Total"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Total}
              />
            </FormGroup>

            <FormGroup>
              <label>
                ID Producto: 
              </label>
              <input
                className="form-control"
                name="IDP"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.IDP}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Fecha Venta: 
              </label>
              <input
                className="form-control"
                name="Fecha"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Fecha}
              />
            </FormGroup>

            <FormGroup>
              <label>
                ID Cliente: 
              </label>
              <input
                className="form-control"
                name="IDC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.IDC}
              />
            </FormGroup>

            <FormGroup>
              <label>
                Nombre Cliente: 
              </label>
              <input
                className="form-control"
                name="NombreC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NombreC}
              />
            </FormGroup>

            <FormGroup>
              <label>
                ID Vendedor: 
              </label>
              <input
                className="form-control"
                name="IDVr"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.IDVr}
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
        <Footer value={{ background: '#BAFFFB' }} />
      </div>
    )

}
}


export default VentasUser