import React from 'react';
import { FaBookmark } from "react-icons/fa";
/*import { Link } from 'react-router-dom';*/

const AlertNotificacaoCandidatura = () => {
    return (
        <div className="row d-flex justify-content-center ">
            <div className="alert alert-success w-100 text-center" role="alert">
                <FaBookmark/> Você tem <strong>X novas</strong> candidaturas.
            </div>
        </div>
    );
};

export default AlertNotificacaoCandidatura;