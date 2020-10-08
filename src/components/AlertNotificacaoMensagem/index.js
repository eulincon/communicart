import React from 'react';
import { FaComments } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AlertNotificacaoMensagem = () => {
    return (
        <div className="row d-flex justify-content-center ">
            <div className="alert alert-primary w-100 text-center" role="alert">
                <FaComments/> Você tem <strong>X novas</strong> mensagens.
            </div>
        </div>
    );
};

export default AlertNotificacaoMensagem;