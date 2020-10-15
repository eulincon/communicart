import React from "react";

import "./styles.css";
import Menu from "../../components/Menu";
import { Link } from "react-router-dom";

function PaginaLogin() {
  let email = "";
  let senha = "";

  async function handleLogin(e) {
    e.preventDefault();
    console.log(
      `Seu email é ${email} e a senha é ${senha} aqui ocorre a chamada a API para a autenticação do usuario`
    );
  }

  return (
    <>
      <Menu />
      <main className="container-fluid corpo">
        <section className="informacoes">
          <h1>Faça já seu login</h1>
          <p>
            Ofereça vagas ou serviços de forma segura rápida e prática, gerencie
            seus anúncios e avalie seus candidatos e vagas.
          </p>
          <Link className="btnCadastro" to="/signup">
            Ainda não tem cadastro?
          </Link>
        </section>
        <form className="formularioLogin" onSubmit={handleLogin}>
          <label className="labelLogin">E-mail</label>
          <input
            type="text"
            className="inputLogin"
            placeholder="insira seu e-mail"
            onChange={(e) => (email = e.target.value)}
            required
          />
          <label className="labelLogin">Senha</label>
          <input
            type="text"
            className="inputLogin"
            placeholder="insira sua senha"
            onChange={(e) => (senha = e.target.value)}
            required
          />
          <div className="opcoesLogin">
            <button className="btnLogin" type="submit">
              Logar
            </button>
            <Link className="btnRec" to="/recuperacao">
              recuperar minha senha
            </Link>
          </div>
        </form>
      </main>
    </>
  );
}
export default PaginaLogin;
