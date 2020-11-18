import React, { useState } from "react";

import "./styles.css";
import Menu from "../../components/Menu";
import SkeletonPage from "../../components/SkeletonPage";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import Loading from "../../components/Loading";

function PaginaLogin() {
  let history = useHistory();
  const { signed, signIn, loading } = useAuth();
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  if (signed) {
    history.push("/feed");
  }

  async function handleLogin(e) {
    e.preventDefault();
    let res = await signIn({ email, password });
    if (res === false) alert("Ops! Algo de errado aconteceu. :/");
  }

  if (loading) {
    return <Loading />;
    // return <h1 className="text-light">Loading</h1>
  }
  return (
    <>
      <SkeletonPage footer="true">
        <div className="form-row mt-4 p-2">
          <div className="form-group col-sm-6">
            <section className="text-center rounded text-light bg-secondary h-100 pt-4 pb-3">
              <h1>Faça já seu login</h1>
              <p>
                Ofereça vagas ou serviços de forma segura rápida e prática, gerencie
                seus anúncios e avalie seus candidatos e vagas.
              </p>
              <Link className="btn btn-secondary_" to="/signup">
                Ainda não tem cadastro?
              </Link>
            </section>
          </div>
          <div className="form-group col-sm-6">
            <div className="text-center bg-secondary text-light p-4 rounded">
              <form onSubmit={handleLogin}>
                <div className="form-group col-8 mx-auto">
                  <label className="">E-mail</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="insira seu e-mail"
                    // onChange={(e) => (email = e.target.value)}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group col-8 mx-auto">
                  <label className="mt-2">Senha</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="insira sua senha"
                    // onChange={(e) => (senha = e.target.value)}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="mx-auto d-flex justify-content-between col-8 mt-4">
                  <button className="btn btn-secondary_" type="submit">
                    Logar
                  </button>
                  <Link className="btn btn-secondary_" to="/recuperacao">
                    recuperar minha senha
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </SkeletonPage>
      {/* <Menu logar={false} />
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
            // onChange={(e) => (email = e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="labelLogin">Senha</label>
          <input
            type="password"
            className="inputLogin"
            placeholder="insira sua senha"
            // onChange={(e) => (senha = e.target.value)}
            onChange={(e) => setPassword(e.target.value)}
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
      </main> */}
    </>
  );
}
export default PaginaLogin;
