import React from 'react';
import MainComponents from "../../components/MainComponents";
import CardPagamentoRealizado from '../../components/CardPagamentoRealizado';
import CardPagamentoPendente from '../../components/CardPagamentoPendente';
import CardPagamentoCancelado from '../../components/CardPagamentoCancelado';

const Payments = () => {
    return (
        <div>
            <MainComponents>
                <h1 className="txt-primary-lighter">Pagamentos</h1>
                <CardPagamentoRealizado />
                <CardPagamentoPendente />
                <CardPagamentoRealizado />
                <CardPagamentoCancelado />
            </MainComponents>                         
                       
        </div>
    );
};

export default Payments;