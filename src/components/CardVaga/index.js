import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const CardVaga = () => {
    return (
        <div className="card my-4">
            <div className="card-body">
                <h4 className="card-title">Título do anúncio</h4>
                <span>Nome da empresa</span>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <Link to="#" className="btn btn-primary">Ver mais</Link>
            </div>
        </div>
    );
};

export default CardVaga;