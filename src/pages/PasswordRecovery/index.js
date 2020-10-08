import React from 'react';

import './styles.css'
import Menu from '../../components/Menu';

function PaginaRecuperacao() {
    let email = '';

    async function handleLogin(e) {
        e.preventDefault();
        console.log(
            `Seu email é ${email} aqui ocorre a chamada a API para a solicitação de nova senha`
        );
    }


    return (
        <>
            <Menu/>
            <main className="corpoRecovery">
                <section className="informacaoRecovery">
                    <h1>Recupere sua senha</h1>
                    <p>Para recuperar sua senha, basta preencher o campo com seu e-mail de cadastro. Enviaremos um e-mail com um link para a criação de uma nova senha.</p>
                </section>
                <form className="formRecovery" onSubmit={handleLogin}>
                    <label className="labelRecovery">E-mail de cadastro</label>
                    <input type="text"
                    className="inputRecovery"
                     placeholder="insira seu e-mail" 
                     onChange={e => email = e.target.value}
                     required 
                     />
                    <div className="link">
                        <button className="btnRecovery" type="submit">Solicitar</button>
                    </div>
                </form>
            </main>
        </>
    );
}
export default PaginaRecuperacao;