import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

import styles from "./styles.module.css";
import { ReactComponent as Logo } from '../../../assets/images/logo_menu.svg';
import { NavbarData, NavbarDataLogout } from './NavbarData';
import { SidebarData } from './SidebarData';
import { useAuth } from '../../../contexts/auth';


const Main = ({ sidebar = false, footer = false, children }) => {
  const { pathname } = useLocation();
  const { signed } = useAuth();
  let navbarData = NavbarData;

  if (!signed) {
    navbarData = NavbarDataLogout;
  }
  
  
  return (
    <div style={{paddingTop: '70px'}}>
      {/* Narbar */}
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary_ mb-2">
        <Link className="navbar-brand	d-none d-lg-block" to={'#'}>
          <Logo width={200} alt="Communicart" />
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
            <Logo width={200} alt="Communicart" />
          </Link>
        </button>

        {sidebar && (
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <GiHamburgerMenu size={30} />
          </button>
        )}
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            {navbarData.map((item, index) => {
              return (
                <li key={index} className={pathname === item.path ? 'nav-item active ml-3' : 'nav-item ml-3'}>
                  <Link className="nav-link" to={item.path}>{item.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>

        {/* Sidebar On Toggle */}
        {sidebar && (
          <div className={`collapse ${styles.tugle} d-lg-none`} id="navbarTogglerDemo02">
            <div className="border-top h-100 mr-3 d-block d-lg-none">
              <ul className="navbar-nav">
                {SidebarData.map((collection, indexCollection) => {
                  return (
                    <>
                      <h4 key={indexCollection} className="text-light ml-3 mt-4">{collection.title}</h4>
                      {collection.items.map((item, indexItem) => {
                        return (
                          <li key={indexItem} className="ml-3 nav-item">
                            <Link className="nav-link active text-light" to={'#'}>{item.titleItem}</Link>
                          </li>
                        )
                      })}
                      <br />
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        )}
      </nav>

      <div className="mb-2 mx-3">
        {/* Sidebar */}
        {sidebar && (
          <aside
            role="navigation"
            className={`position-fixed col-2 ${styles.aside_position} d-none d-lg-block`}
          >
            <div className="bg-secondary rounded h-100 mr-3">
              <ul className="nav flex-column">
                {SidebarData.map((collection, indexCollection) => {
                  return (
                    <>
                      <h4 key={indexCollection} className="ml-3 mt-4">{collection.title}</h4>
                      {collection.items.map((item, indexItem) => {
                        return (
                          <li key={indexItem} className="nav-item">
                            <Link className="nav-link active text-light" to={item.path}>{item.titleItem}</Link>
                          </li>
                        )
                      })}
                      <br />
                    </>
                  )
                })}
              </ul>
            </div>
          </aside>
        )}

        {/* Main */}
        <main className={`p-3 bg-dark ${styles.min_height} rounded ${sidebar ? 'col-lg-10 col-md-12 ml-auto' : 'mx-2'} `}>
          {children}
        </main>
      </div>

      {/* Footer */}
      {footer && (
        <footer className="page-footer font-small blue bg-primary_ position-sticky" >
          <div className="footer-copyright text-center py-3 text-light">© 2020 Copyright:
                    <Link to="https://mdbootstrap.com/" className="text-light"> Communicart.com.br</Link>
          </div>
        </footer>
      )}
    </div>
  )
};

export default Main;