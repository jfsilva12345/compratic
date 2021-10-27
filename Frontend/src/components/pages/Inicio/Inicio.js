import React from 'react'
import Footer from '../../navegacion/Footer/Footer';
import Navbar1 from '../../navegacion/Navbar/Navbar1'
import './Inicio.css'
import Imagenes from '../../../assets/imagenes'

const Inicio = () => {
    return (
        <div>
            <Navbar1 value={{ background: '#C4C4C4' }} 
            attribute={{
                nombre1: 'PRODUCTOS',
                nombre2: 'Cerrar Sesión',
                to1: '/inicio',
                to2: '/login'

            }}/>
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h3>Aquí encontrarás una muestra de nuestros <span>productos</span></h3>
                    </div>
  
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-3 col-md-6 portfolio-item filter-app">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={  Imagenes.img1 } className="img-fluid" alt="imagen de computador" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Computadores</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>
            
                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img2 } className="img-fluid" alt="imagen de diademas" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Diademas</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img3 } className="img-fluid" alt="imagen de software" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Software</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img4 } className="img-fluid" alt="imagen de hdd" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Disco Duro</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img5 } className="img-fluid" alt="" style={{width: 150+'%'}} />
                            </div>
                            <div className="portfolio-info">
                                <h4>Playstation</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img6 } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Portatil</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img7 } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Impresora</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img8 }className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Teclado</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img9 } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Celular</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img10 } className="img-fluid" alt="" />
                            </div>
                            <div className="portfolio-info">
                                <h4>Mouse</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img11 } className="img-fluid" alt="" style={{width: 150+'%'}} />
                            </div>
                            <div className="portfolio-info">
                                <h4>PC's</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 portfolio-item filter-web">
                            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                                <img src={ Imagenes.img12 } className="img-fluid" alt="" style={{width: 150+'%'}} />
                            </div>
                            <div className="portfolio-info">
                                <h4>USB</h4>
                                <p>Tecnología</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer value={{ background: '#C4C4C4' }} />
        </div>
    )
}

export default Inicio
