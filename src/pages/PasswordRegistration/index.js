import React from 'react';

import './styles.css'
import Menu from '../../components/Menu';

function PaginaCadastroSenha() {
    let senha = '';
    let reSenha = '';

    async function handleLogin(e) {
        e.preventDefault();
        if(senha === reSenha){
            console.log(
                `Senhas informadas confere, ${senha} confirmação: ${reSenha}`
            );
        }else{
            console.log(
                `Senhas informadas NÃO confere, ${senha} confirmação: ${reSenha}`
            );
        }
    }


    return (
        <>
            <Menu/>
            <main className="corpoRegistration">
                <section className="infoRegistration">
                    <h1>Cadastre sua nova senha</h1>
                    <p>Crie uma senha com no minimo 8 caracteres. É necessário conter uma letra maiúscula, número e um caractere especial.</p>
                </section>
                <form className="formRegistration" onSubmit={handleLogin}>
                    <label className="labelRegistration" >Nova senha</label>
                    <input type="password"
                    className="inputRegistration"
                     placeholder="Insira uma senha forte" 
                     onChange={e => senha = e.target.value}
                     required 
                     />
                      <label className="labelRegistration">Confirme a nova senha</label>
                    <input type="password"
                    className="inputRegistration"
                     placeholder="Digite novamente" 
                     onChange={e => reSenha = e.target.value}
                     required 
                     />
                    <div className="link">
                        <button className="btnConfirm" type="submit">Confirmar</button>
                    </div>
                </form>
            </main>
        </>
    );
}
export default PaginaCadastroSenha;