import React from "react";
import api from "../../services/api";

import "./styles.css";
import SkeletonPage from "../../components/SkeletonPage";

import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

const Signup = () => {
  let email = "";
  let senha = "";
  let confirmarSenha = "";
  let history = useHistory();
  const { signIn } = useAuth();

  async function signUpApi(data) {
    const res = await api
      .post("/api/usuarios", data)
      .then((response) => {
        signIn(data);
        return response;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });

    return res;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (senha === confirmarSenha) {
      const response = await signUpApi({ email: email, password: senha });
      response.status === 201
        ? history.push("/cadastro")
        : alert("Erro ao criar usuário");
    } else {
      alert("A senha não corresponde à confirmação.");
    }
  }

  return (
    <>
      <SkeletonPage footer={true}>
        <main className="body bg-dark">
          <div className="row mt-4 w-100">
            <div className="col-sm-6">
              <section className="informacoes text-center rounded text-light bg-secondary p-4 w-100 d-flex justify-content-center">
                <h1>Cadastre-se já</h1>
                <p>
                  Ofereça vagas ou serviços de forma segura rápida e prática,
                  gerencie seus anúncios e avalie seus candidatos e vagas.
                </p>
                <Link className="btn btn-secondary_" to="/login">
                  Já tem cadastro?
                </Link>
              </section>
            </div>
            <div className="col-sm-6">
              <form
                className="formularioLogin text-center rounded text-light bg-secondary w-100"
                onSubmit={handleSubmit}
              >
                <div className="form-group w-100">
                  <label className="labelLogin">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="insira seu e-mail"
                    onChange={(e) => (email = e.target.value)}
                    required
                  />
                </div>
                <div className="form-group w-100">
                  <label className="labelLogin">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Crie sua senha"
                    onChange={(e) => (senha = e.target.value)}
                    required
                  />
                </div>
                <label className="labelLogin">Confirme a senha</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Confirme sua senha"
                  onChange={(e) => (confirmarSenha = e.target.value)}
                  required
                />
                <div className="mt-3">
                  <button className="btn btn-secondary_" type="submit">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </main>
      </SkeletonPage>
    </>
  );
};
export default Signup;
