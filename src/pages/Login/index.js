import React from 'react';

import './styles.css'
import Menu from '../../components/Menu';

function PaginaLogin() {

    return (
        < >
            <Menu/>
            <main className="container-fluid">
                <section>
                    <h1>Faça já seu login</h1>
                    <p>Ofereça vagas ou serviços de forma segura rápida e prática, gerencie seus anúncios e avalie seus candidatos e vagas.</p>
                    <a href="" className="btnCadastrar" >Ainda não tem cadastro?</a>
                </section>
                <form>
                    <label>E-mail</label>
                    <input type="text" placeholder="insira seu e-mail" required />
                    <label>Senha</label>
                    <input type="text" placeholder="insira sua senha" required />
                    <div className="link">
                        <button className="btnLogin" type="submit">Logar</button>
                        <a href="" > recuperar minha senha</a>
                    </div>
                </form>
            </main>
        </>
    );
}
export default PaginaLogin;