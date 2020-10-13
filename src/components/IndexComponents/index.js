import React from 'react';

import Footer from "../Footer";
import Menu from "../Menu";


const MainComponents = ({children}) => {
    return (
        <div className="container-fluid bg-light">
            <Menu/>
            <div className="row">
                <div className="container-fluid">
                    {children}
                </div>
            </div>
            <div className="row mt-5">
                <Footer/>
            </div>
        </div>
    );
};

export default MainComponents;