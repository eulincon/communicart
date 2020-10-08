import React from 'react';

import Sidebar from '../../components/Sidebar';
import AlertNotificacaoCandidatura from '../../components/AlertNotificacaoCandidatura';
import AlertNotificacaoMensagem from '../../components/AlertNotificacaoMensagem';
import AlertSemNotificacao from '../../components/AlertSemNotificacao';
import CardNotificacaoCandidatura from '../../components/CardNotificacaoCandidatura';
import CardNotificacaoMensagem from '../../components/CardNotificacaoMensagem';
import NotifyBackground from "../../components/NotifyBackground";


const Notify = () => {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-2">
                    <Sidebar/>
                </div>
                <div className="col-10 pl-5">
                    <NotifyBackground>
                        <section>
                            <AlertNotificacaoCandidatura/>
                            <AlertNotificacaoMensagem/>
                            <AlertSemNotificacao/>
                        </section>
                        <hr/>
                        <section>
                            <CardNotificacaoCandidatura/>
                            <CardNotificacaoCandidatura/>
                            <CardNotificacaoMensagem/>
                            <CardNotificacaoMensagem/>
                        </section>
                    </NotifyBackground>
                </div>
            </div>

        </div>
    );
};

export default Notify;