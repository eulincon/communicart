import React from 'react';
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";
import Footer from '../../components/Footer';

const CardWishlist = () => {   

    return (
        <div className="card my-4 bg-lighter_">
            <div className="card-body txt-primary-lighter text-center">
                <h4 className="card-title">Título</h4>
                <span>Nome do cliente</span>
                <p className="card-text">Reprehenderit eu consequat officia dolore ad incididunt et.</p>
                <p className={`btn btn-primary btn-warning`}>Pagamento pendente</p>
            </div>
        </div>
    );
};

export default CardWishlist;