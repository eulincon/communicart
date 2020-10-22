import React from 'react';
import { Link } from 'react-router-dom';

const Main = ({ sidebar = false, footer = false, children }) => {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to={'#'}>Hidden brand</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
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

      {sidebar && (
        <h2 className="txt-primary-lighter">sidebar</h2>
      )}
      {children}
      {footer && (
        // <!-- Footer -->
        <footer class="page-footer font-small blue bg-light fixed-bottom">
          {/* <!-- Copyright --> */}
          <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        // <!-- Footer -->
      )}
    </>
  )
};

export default Main;