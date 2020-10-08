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


const Notify = () => {
    return (
        <div>
            <Sidebar/>
            <div className="container-fluid bg-light m-0 px-4 pt-1 pb-5">
                <Main>
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
                </Main>
            </div>
            <Footer/>
        </div>

    );
};

export default Notify;