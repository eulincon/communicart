import React from 'react';

import logoMenu from '../../assets/img/logo_menu.svg';
import './styles.css'

function Menu() {

    return (
        < >
            <header >
                <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
                    <img src={logoMenu} />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="linkMenu" href="#">Cadastre-se</a>
                            </li>
                            <li className="nav-item">
                                <a className="linkMenu" href="#">Como funciona</a>
                            </li>
                            <li className="nav-item" >
                                <a className="linkMenu linkLogin" href="#" >Fazer Login</a>
                            </li>
                        </ul>

                    </div>
                </nav>
            </header>

        </>
    );
}

export default Menu;