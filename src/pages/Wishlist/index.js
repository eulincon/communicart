import React from 'react';
import CardWishlist from '../../components/CardWishlist';
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";


const Wishlist = () => {
    return (
            <Main>
                <Sidebar />
                <div className="col-12 mb-4 mt-n3 p-0">
                <h4 className="txt-primary-lighter">Lista de Desejos</h4>
                </div>              
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
                <CardWishlist /> 
            </Main>
                      
    );
};

export default Wishlist;