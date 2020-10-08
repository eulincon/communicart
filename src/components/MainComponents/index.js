import React from 'react';
import { FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import style from "../Sidebar/styles.module.css";
import {SidebarData} from "../Sidebar/SidebarData";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import Main from "../Main";


const MainComponents = ({children}) => {
    return (
        <div className="container-fluid bg-light">
            <header className="bg-dark row p-4">
                <small className="text-white">H E A D E R  P R O V I S Ó R I O</small>
            </header>
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10 d-flex justify-content-center px-5">
                    <Main>
                        {children}
                    </Main>
                </div>
            </div>
            <div className="row mt-5">
                <Footer/>
            </div>
        </div>
    );
};

export default MainComponents;