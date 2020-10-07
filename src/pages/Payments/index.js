import React from 'react';

import { ReactComponent as SvgPhoto } from './photo.svg';
import { ReactComponent as SvgIconDate } from './iconDate.svg';

import './styles.css'

const Payments = () => {
    return(
        <div className="body-payments">            
            <h1>Pagamentos</h1>
            <p>Veja abaixo a lista de pagamentos pendentes ou finalizados:</p>

            <div className="card">
                
                <SvgPhoto className="photo"/>
                <p className="title">Título da publicação</p>
                <p className="colorDate"> <SvgIconDate className="iconDate"/> Prazo da entrega:</p>
                <div className="container">
                
                <p className="succeedTransaction">Pagamento realizado</p>
                <p className="info">Ver publicação</p>
                </div>
            </div>
            <br />
            <div className="card">
                
                <SvgPhoto className="photo"/>
                <p className="title">Título da publicação</p>
                <p className="colorDate"> <SvgIconDate className="iconDate"/> Prazo da entrega:</p>
                <div className="container">
                
                <p className="pendingTransaction">Pagamento pendente</p>
                <p className="info">Já realizou o pagamento? Mude o status</p>
                </div>
            </div>
            <br />
            <div className="card">
                
                <SvgPhoto className="photo"/>
                <p className="title">Título da publicação</p>
                <p className="colorDate"> <SvgIconDate className="iconDate"/> Prazo da entrega:</p>
                <div className="container">
                
                <p className="succeedTransaction">Pagamento realizado</p>
                <p className="info">Ver publicação</p>
                </div>
            </div>

        </div>               
                        
    );
};

export default Payments;