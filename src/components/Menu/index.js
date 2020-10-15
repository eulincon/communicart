import React from "react";
import { Link } from "react-router-dom";

import logoMenu from "../../assets/images/logo_menu.svg";
import "./styles.css";

function Menu() {
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
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
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
              <Link className="linkMenu linkLogin" to="/">
                Fazer Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Menu;
