import React from 'react';

import Sidebar from '../../components/Sidebar';
import AlertNotificacaoCandidatura from '../../components/AlertNotificacaoCandidatura';
import AlertNotificacaoMensagem from '../../components/AlertNotificacaoMensagem';
import AlertSemNotificacao from '../../components/AlertSemNotificacao';
import CardNotificacaoCandidatura from '../../components/CardNotificacaoCandidatura';
import CardNotificacaoMensagem from '../../components/CardNotificacaoMensagem';
import Main from '../../components/Main';
import NotifyBackground from "../../components/NotifyBackground";


const Notify = () => {
    return (
        <div className="container-fluid bg-light m-0 px-4 pt-1">
            <Sidebar/>
            <Main>
                <section>
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
    );
};

export default Notify;