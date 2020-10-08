import React from 'react';
import { Link } from 'react-router-dom';

const AlertNotificacaoCandidatura = () => {
    return (
        <div className="row d-flex justify-content-center ">
            <div className="alert alert-success w-100 text-center" role="alert">
                <i className="fas fa-bookmark"></i> Você tem <strong>X novas</strong> candidaturas.
            </div>
        </div>
    );
};

export default AlertNotificacaoCandidatura;