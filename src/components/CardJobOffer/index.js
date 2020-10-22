import React from 'react';
import { Link } from 'react-router-dom';

const CardJobOffer = () => {
    return (
        <div className="card my-4 bg-lighter_ text-white">
            <div className="card-body">
                <h4 className="card-title">Título do anúncio</h4>
                <br></br>
                <p className="card-text">Id ex non ea est aliqua. Exercitation Lorem sint commodo irure tempor.</p>
                <button type="button" className="btn btn-success">Ver vaga</button>              
                <button type="button" className="btn btn-danger">Cancelar</button>
            </div>
        </div>
    );
};

export default CardJobOffer;