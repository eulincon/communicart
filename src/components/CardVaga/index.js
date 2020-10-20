import React from 'react';
import { Link } from 'react-router-dom';

import ButtonLikeVaga from '../../components/ButtonLikeVaga';

const CardVaga = () => {
    

    return (
        <div className="card my-4 bg-lighter_ text-white">
            <div className="card-body">
                <h4 className="card-title">Título do anúncio</h4>
                <span>Nome da empresa</span>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="/vagas/1" className={`btn btn-primary btn-secondary_`}>Ver mais</Link>
                <ButtonLikeVaga />
            </div>
        </div>
    );
};

export default CardVaga;