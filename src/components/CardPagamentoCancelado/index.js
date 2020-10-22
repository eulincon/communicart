import React from 'react';

const CardPagamentoCancelado = () => {   

    return (
        <div className="card my-4 bg-lighter_">
            <div className="card-body text-danger text-center">
                <s>
                    <h4 className="card-title">Título</h4>
                    <p>Nome do cliente</p>
                    <p>Reprehenderit eu consequat officia dolore ad incididunt et.</p>
                    <p className={`btn btn-primary btn-danger`}>Pagamento cancelado</p>
                </s>
                
            </div>
        </div>
        
   
    );
};

export default CardPagamentoCancelado;