import React from 'react';

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
                <div className="col-lg-2 d-none d-lg-block">
                    <Sidebar/>
                </div>
                <div className="col-12 col-lg-10 d-flex justify-content-center px-1 px-lg-5">
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