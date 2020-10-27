import React from "react";
import { Link } from "react-router-dom";

import logoMenu from "../../assets/images/logo_menu.svg";
import "./styles.css";

function Menu({logar}) {
  const logado = logar;

  function userLogado(logado){
    if (logado === true) {
      return (
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 listaMenu">
          <li className="nav-item active">
            <Link className="linkMenu" to="/signup">
              Feed
                </Link>
          </li>
          <li className="nav-item">
            <Link className="linkMenu" to="/">
            Lista de desejos
                </Link>
          </li>
          <li className="nav-item">
            <Link className="linkMenu" to="/">
              Notificação
                </Link>
          </li>
          <li className="nav-item linkSair">
            <Link className="linkSairText" to="/">
              Sair
                </Link>
          </li>
        </ul>
      );
    }else{
      return (
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0 listaMenu">
          <li className="nav-item active">
            <Link className="linkMenu" to="/signup">
              Cadastre-se
                </Link>
          </li>
          <li className="nav-item">
            <Link className="linkMenu" to="/">
              Como funciona
                </Link>
          </li>
          <li className="nav-item">
            <Link className="linkMenu linkLogin b" to="/">
              Fazer Login
                </Link>
          </li>
        </ul>
      );
    }
  }



  return (
    <header className="baseMenu">
      <nav class="navbar navbar-expand-lg menuPrincipal">
        <img src={logoMenu} />
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
{userLogado(logado)}
        </div>
      </nav>
    </header>
  );
}

export default Menu;
