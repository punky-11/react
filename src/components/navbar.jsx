import React from "react";
import "../navbar.css";


function Navbar(){
    return(
        <nav className="nav">
            <a href="#" className="nav__brand"> sl_ropa </a>
            <ul className="nav__menu">
                <li className="nav__ites"> <a href="" className="nav__link">Inicio</a> </li>
                <li className="nav__ites"> <a href="" className="nav__link">Productos</a> </li>
                <li className="nav__ites"> <a href="" className="nav__link"> Registrar</a> </li>
                <li className="nav__ites"> <a href="" className="nav__link">Ingresar</a> </li>
            </ul>
            <div className="nav__toggler">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>

            </div>
      </nav>
    );
}

export default Navbar;