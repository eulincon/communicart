import React from 'react';

const CardPagamentoRealizado = () => {   

    return (
        <div className="card my-4 bg-lighter_">
            <div className="card-body txt-primary-lighter">
                <h4 className="card-title">Título</h4>
                <span>Nome do cliente</span>
                <p className="card-text">Reprehenderit eu consequat officia dolore ad incididunt et.</p>
                <p className={`btn btn-primary btn-secondary_`}>Pagamento realizado</p>
                <br></br>
                <button type="button" class="btn btn-dark txt-secondary_">Alterar status</button>
            </div>
        </div>      
   
    );
};

export default CardPagamentoRealizado;