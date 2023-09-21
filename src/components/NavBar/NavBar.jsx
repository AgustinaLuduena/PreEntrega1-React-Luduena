import React from 'react';
import "./NavBar.css";
import logo from "../../assets/logo1.png";
import CartWidget from '../CartWidget/CartWidget.jsx';


const NavBar = () => {
  return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div>
                    <a href="../../../index.html">
                        <img src={logo}  alt="Logo TOKIO" style={{width: "65px", marginLeft: "5px", marginRight: "15px"}} />
                    </a>
                </div>
                <a class="navbar-brand" href="../../../index.html">TOKIO</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Inicio</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Cómo comprar</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Productos
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Pijamas</a></li>
                        <li><a class="dropdown-item" href="#">Ropa Deportiva</a></li>
                        <li><a class="dropdown-item" href="#">Accesorios</a></li>
                    </ul>
                    </li>
                    <li className='CartWidgetConteiner'>
                        <CartWidget/>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
  )
}

export default NavBar