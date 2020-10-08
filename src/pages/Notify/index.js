import React from 'react';

import Sidebar from '../../components/Sidebar';
import AlertNotificacaoCandidatura from '../../components/AlertNotificacaoCandidatura';
import AlertNotificacaoMensagem from '../../components/AlertNotificacaoMensagem';
import AlertSemNotificacao from '../../components/AlertSemNotificacao';
import CardNotificacaoCandidatura from '../../components/CardNotificacaoCandidatura';
import CardNotificacaoMensagem from '../../components/CardNotificacaoMensagem';
import Main from '../../components/Main';
import Footer from '../../components/Footer';
import NotifyBackground from "../../components/NotifyBackground";
import MainComponents from "../../components/MainComponents";


const Notify = () => {
    return (
        <MainComponents>
            <div className="col-12 mb-4 mt-n3 p-0">
                <h2 className="text-light m-0 p-0">Notificações</h2>
            </div>
            <section className="col-12">
                <AlertNotificacaoCandidatura/>
                <AlertNotificacaoMensagem/>
                <AlertSemNotificacao/>
            </section>
            <hr className="bg-primary-darker" />
            <section>
                <CardNotificacaoCandidatura/>
                <CardNotificacaoCandidatura/>
                <CardNotificacaoMensagem/>
                <CardNotificacaoMensagem/>
            </section>
        </MainComponents>

    );
};

export default Notify;