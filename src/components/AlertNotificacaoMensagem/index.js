import React from 'react';
import { Link } from 'react-router-dom';

const AlertNotificacaoMensagem = () => {
    return (
        <div className="row d-flex justify-content-center ">
            <div className="alert alert-primary w-100 text-center" role="alert">
                <i className="far fa-comments"></i> Você tem <strong>X novas</strong> mensagens.
            </div>
        </div>
    );
};

export default AlertNotificacaoMensagem;