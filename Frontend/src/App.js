import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/pages/Login/Login';
import Inicio from './components/pages/Inicio/Inicio';
import VentasUser from './components/pages/VentasUser/VentasUser';
import VentasAdmin from './components/pages/VentasAdmin/VentasAdmin';
import Usuarios from './components/pages/usuarios/usuarios'
import productosUser from './components/pages/Productos/productosUser';
import productosAdmin from './components/pages/Productos/productosAdmin';



const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/login' exact component={Login}/>
        <Route path='/ventasUser' exact component={VentasUser}/>
        <Route path='/ventasAdmin' exact component={VentasAdmin}/>
        <Route path='/' exact component={Login}/>
        <Route path='/inicio' exact component={Inicio}/>
        <Route path='/usuariosAdmin' exact component={Usuarios}/>
        <Route path='/productosUser' exact component={productosUser}/>
        <Route path='/productosAdmin' exact component={productosAdmin}/>
      
      </Switch>  
    </Router>    
  );
}

export default App;
