import React from 'react';
import { FaBell } from "react-icons/fa";
/*import { Link } from 'react-router-dom';*/

const AlertSemNotificacao = () => {
    return (
        <div className="row d-flex justify-content-center ">
            <div className="alert alert-danger w-100 text-center" role="alert">
                <FaBell/> <strong>Não há notificações.</strong>
            </div>
        </div>
    );
};

export default AlertSemNotificacao;