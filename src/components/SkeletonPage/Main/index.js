import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./styles.module.css";
import { ReactComponent as Logo } from '../../../assets/images/logo.svg';


const Main = ({ sidebar = false, footer = false, children }) => {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light mb-2">
        <Link className="navbar-brand	d-none d-lg-block" to={'#'}>
          <Logo width={200} alt="Communicart"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <Link className="navbar-brand" to={'#'}>
            <Logo width={200} alt="Communicart"/>
          </Link>
          {/* <span className="navbar-toggler-icon"></span> */}
          {/* <Logo width={200} alt="Communicart"/> */}
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          {/* <Link className="navbar-brand" to={'#'}>
            <Logo width={200} alt="Communicart"/>
          </Link> */}
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to={'#'}>Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={'#'}>Link</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link disabled" to={'#'}>Disabled</Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className="mb-2 bg-dark mx-3">
        {sidebar && (
          <aside 
            className={`position-fixed col-2 ${styles.aside_position} d-none d-lg-block`}
          >
            <div className="bg-secondary rounded h-100 mr-3">
              <ul class="nav flex-column">
                <li class="nav-item">
                  <Link class="nav-link active text-light" to={'#'}>Active</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-light" to={'#'}>Link</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link text-light" to={'#'}>Link</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link disabled text-light" to={'#'}>Disabled</Link>
                </li>
              </ul>
            </div>
          </aside>
        )}
        <main className={`bg-secondary ${styles.min_height} rounded ${sidebar ? 'col-lg-10 col-md-12 ml-auto' : 'mx-2'} `}>
          {children}
        </main>
      </div>

      {footer && (
        // <!-- Footer -->
        <footer class="page-footer font-small blue bg-light position-sticky ">
          {/* <!-- Copyright --> */}
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <Link href="https://mdbootstrap.com/"> Communicart.com.br</Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        // <!-- Footer -->
      )}
    </>
  )
};

export default Main;