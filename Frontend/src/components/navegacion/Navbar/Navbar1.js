import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from "../../../../src/assets/images/logo1.png"; 


const Navbar1 = ({ value, attribute }) => {
    return (
      <nav className="navbar navbar-expand-sm navbar-light menu" role="navigation" style={value}>
        <div className="container-fluid contenedor">
          <div className="collapse navbar-collapse" id="navbarsExample03">
           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <ul className="navbar-nav navbar-left">
                  <li className="nav-item2">
                     
                      <img  className = "logo2"
                          src = {logo}
                      /> 
                    
                      
                  </li>
                  
              </ul>
              <li className="nav navbar-nav navbar-center">
                  <Link className="nav-link" to={attribute.to1}>{attribute.nombre1}</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link inicio" to={attribute.to2}>{attribute.nombre2}</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link inicio" to={attribute.to3}>{attribute.nombre3}</Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to={attribute.to4}>{attribute.nombre4}</Link>
              </li>
              
              <li className="nav-item">
                  <Link className="nav-link" to={attribute.to5}>{attribute.nombre5}</Link>
              </li>
              
          </ul>
        </div>
      </div>
  </nav>
    
    )
}

export default Navbar1;
