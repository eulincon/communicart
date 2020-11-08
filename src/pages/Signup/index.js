import React from "react";
import api from '../../services/api';

import "./styles.css";
import Menu from "../../components/Menu";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const Signup = () => {
  let email = "";
  let senha = "";
  let confirmarSenha = "";
  let history = useHistory();
  const {signIn} = useAuth();

  async function signUpApi(data){
    const res = await api.post('/api/usuarios', data).then(response => {
      signIn(data);
      return response;
    }).catch(err => {
      console.log(err);
      return err;
    })

    return res;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (senha === confirmarSenha) {
      const response = await signUpApi({email: email, password: senha})
      response.status === 201 ? history.push("/cadastro") : alert("Erro ao criar usuário");
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
