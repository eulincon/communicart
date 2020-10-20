import React from 'react';
import CardWishlist from '../../components/CardWishlist';
import MainComponents from "../../components/MainComponents";


const Wishlist = () => {
    return (
        <MainComponents>
                <div className="col-12 mb-4 mt-n3 p-0">
                <h4 className="txt-primary-lighter">Lista de Desejos</h4>
                </div>              
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
                <CardWishlist />
        </MainComponents>            
                                    
    );
};

export default Wishlist;