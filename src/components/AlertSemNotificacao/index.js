import React from 'react';
import { Link } from 'react-router-dom';

const AlertSemNotificacao = () => {
    return (
        <div className="row d-flex justify-content-center ">
            <div className="alert alert-danger w-100 text-center" role="alert">
                <i className="far fa-bell"></i> <strong>Não há notificações.</strong>
            </div>
        </div>
    );
};

export default AlertSemNotificacao;