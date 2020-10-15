import React from "react";

import "./styles.css";
import Menu from "../../components/Menu";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  let email = "";
  let senha = "";
  let confirmarSenha = "";
  let history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (senha === confirmarSenha) {
      console.log(
        `Seu email é ${email} e a senha é ${senha}, a senha confirmada é ${confirmarSenha}`
      );
      setTimeout(() => {
        history.push("/cadastro");
      }, 3000);
    } else {
      alert("A senha não corresponde à confirmação.");
    }
  }

  return (
    <>
      <Menu />
      <main className="container-fluid corpo">
        <section className="informacoes">
          <h1>Cadastre-se já</h1>
          <p>
            Ofereça vagas ou serviços de forma segura rápida e prática, gerencie
            seus anúncios e avalie seus candidatos e vagas.
          </p>
          <Link className="btnCadastro" to="/login">
            Já tem cadastro?
          </Link>
        </section>
        <form className="formularioLogin" onSubmit={handleSubmit}>
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
            type="password"
            className="inputLogin"
            placeholder="insira sua senha"
            onChange={(e) => (senha = e.target.value)}
            required
          />
          <label className="labelLogin">Confirme a senha</label>
          <input
            type="password"
            className="inputLogin"
            placeholder="confirme sua senha"
            onChange={(e) => (confirmarSenha = e.target.value)}
            required
          />
          <div className="opcoesLogin">
            <button className="btnLogin" type="submit">
              Enviar
            </button>
          </div>
        </form>
      </main>
    </>
  );
};
export default Signup;
