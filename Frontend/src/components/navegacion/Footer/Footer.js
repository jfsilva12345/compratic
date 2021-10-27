import React from 'react'
import './Footer.css';
import compra from "../../../../src/assets/images/logo3.png"; 

const Footer = ({ value }) => {
    
    return (
        <footer style={value}>
            <img 
            src = {compra}
            /> 
        </footer>
    )
}

export default Footer;
