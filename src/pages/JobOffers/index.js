import React from 'react';
import CardJobOffer from '../../components/CardJobOffer';
import Main from "../../components/Main";
import Sidebar from "../../components/Sidebar";

const JobOffers = () => {
    return (
        <div>
            <Sidebar />
            <Main>
                <h3 className="text-white">Seus serviços</h3>
                <CardJobOffer />
                <CardJobOffer />
                <CardJobOffer />
                <CardJobOffer />
                <CardJobOffer />
            </Main>
               
        </div>
    );
};


export default JobOffers;