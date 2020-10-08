import React from 'react';
import { Link } from 'react-router-dom';

const CardNotificacaoMensagem = () => {
    return (
        <div className="card w-100 shadow rounded my-4">
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h6 className="text-primary card-title small font-weight-bold">
                            <i className="fas fa-comments"></i> Mensagem</h6>
                        <p className="card-text mb-0"><strong>Nome da pessoa</strong> enviou uma nova mensagem.</p>
                        <p className="text-muted mt-0">Mensagem</p>
                    </div>
                    <div className="col">
                        <img className="float-right img-fluid rounded-circle border" width="100px" src="#"
                             alt="Nome da pessoa"/>
                    </div>
                </div>
            </div>
            <div className="card-footer d-flex justify-content-around">
                <Link to="#" className="font-weight-bold text-decoration-none">RESPONDER</Link><Link to="#" className="font-weight-bold text-decoration-none">ARQUIVAR</Link>
            </div>
        </div>
    );
};

export default CardNotificacaoMensagem;