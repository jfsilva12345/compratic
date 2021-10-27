import React from 'react';
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1'
import logo3 from "../../../../src/assets/images/logo3.png"; 
import  {  GoogleLogin  }  from  'react-google-login' ;
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";
import './Login.css';

const Login = () => {
    let history = useHistory();
    let nombre = '';
    const  responseGoogle  =  async(resp)  =>  { 
        try {
            const { data } = await axios({
                method: 'POST',
                url: 'http://localhost:5000/api/auth/google/login',
                headers: {
                  'Authorization': `Bearer ${resp.tokenId}`
                }
              });
              console.log(data);
              console.log(data.rol);
            //   nombre = data.name;
            //   console.log(nombre)
            //   data ? (
            //     history.push("/inicio")
            //   ) : (
            //     history.push("/")
            //   )
            if(data.rol === "Administrador"){
                history.push("/usuariosAdmin")
            } else 
                if (data.rol === "Vendedor"){
                    history.push("/ventasUser")
                } else 
                    if (data.rol === "Usuario"){
                        history.push("/inicio")
                } else {
                    history.push("/")
                }
        }catch (error){
            console.log(error.toJSON());
            console.log(error.response.data);
        }
    };
    return (
        <div>
            <Navbar1 value={{ background: '#ccf6ff' }} 
            attribute={{
                nombre1: 'LOGIN',
                nombre2: 'VENTAS',
                nombre3: 'USUARIOS',
                nombre4: 'Iniciar Sesión',
                to1: '/login',
                to2: '/ventasUser',
                to3: '/usuariosAdmin',
                to4: '/',
            }}/>
            <section className='seccion-login'>
                <article className="contenedor">
                    <div className="contenido-login">
                        <form action="POST">
                        <img 
                           src = {logo3}
                        /> 
                            <div className="input-div usuario">
                                <div className="i">
                                    <FontAwesomeIcon icon={faUser} />                            </div>
                                <div className="div">
                                    <input type="text" name="email" className="input" placeholder="EMAIL" />
                                </div>
                            </div>
                            <div className="input-div pass">
                                <div className="i">
                                    <FontAwesomeIcon icon={faLock} />
                                </div>
                                <div className="div">
                                    <input type="password" name="pass" className="input" placeholder="PASSWORD" />
                                </div>
                            </div>      
                            <div className="botones">
                                <input type="submit" className="btn1" value="INGRESAR" />
                                < GoogleLogin 
                                    clientId = { process.env.REACT_APP_IDOAUTH } 
                                    render={renderProps => (
                                        <button className="btn0" onClick={renderProps.onClick} disabled={renderProps.disabled}>Ingresar Con Gmail</button>
                                      )}
                                    onSuccess = { responseGoogle } 
                                    onFailure = { responseGoogle } 
                                    CookiePolicy = { 'single_host_origin' } 
                                />
                            </div>          
                        </form>
                    </div>
                </article>
                <article className="logo">
                    <img src="imagen/las-compras-en-linea.png" alt="" />
                </article>
            </section>
            <Footer value={{ background: '#ccf6ff' }} />
        </div>
    )
}

export default Login;
