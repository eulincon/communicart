import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const Registration = () => {
  const [cadastro, setCadastro] = useState({
    nome: "",
    sobrenome: "",
    nomeFantasia: "",
    nomeRepresentante: "",
    cpf: "",
    cnpj: "",
    tipo: "cpf",
  });

  let history = useHistory();

  function handleRadio(e) {
    setCadastro({ ...cadastro, tipo: e.target.value });
  }

  function handleChange(e) {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (cadastro.tipo === "cpf") {
      console.log(cadastro.nome, cadastro.sobrenome, cadastro.cpf);
    } else {
      console.log(
        cadastro.nomeFantasia,
        cadastro.nomeRepresentante,
        cadastro.cnpj
      );
    }
    history.push("/criar-perfil");
  }

  return (
    <>
      <header>
        <Menu />
      </header>
      <div className="py-5 full-cadastro">
        <div className="container bg-white py-3 px-5 form-box">
          <h1 className="text-center">Cadastro</h1>
          <form id="cadastro" className="mb-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-check form-check-inline mr-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoCadastro"
                  id="cadastro-cpf"
                  value="cpf"
                  defaultChecked="true"
                  onChange={handleRadio}
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Pessoa Física
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoCadastro"
                  id="cadastro-cnpj"
                  value="cnpj"
                  onChange={handleRadio}
                  required
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Pessoa Jurídica
                </label>
              </div>
            </div>
            <div className="form-group mb-5">
              {cadastro.tipo === "cpf" ? (
                <>
                  <label htmlFor="nome-pessoa-fisica">Nome*</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="nome-pessoa-fisica"
                    placeholder="Insira seu nome"
                    onChange={handleChange}
                    name="nome"
                    required
                  />
                  <label htmlFor="sobrenome-pessoa-fisica">Sobrenome*</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="sobrenome-pessoa-fisica"
                    placeholder="Insira seu sobrenome"
                    onChange={handleChange}
                    name="sobrenome"
                    required
                  />
                  <label htmlFor="cpf-pessoa-fisica">CPF*</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="cpf-pessoa-fisica"
                    placeholder="Insira seu CPF"
                    onChange={handleChange}
                    name="cpf"
                    required
                  />
                </>
              ) : (
                <>
                  <label htmlFor="nome-fantasia-PJ">Nome fantasia*</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="nome-fantasia-PJ"
                    placeholder="Insira o nome fantasia da empresa"
                    onChange={handleChange}
                    name="nomeFantasia"
                    required
                  />
                  <label htmlFor="nome-representante-PJ">
                    Nome do representante*
                  </label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="nome-representante-PJ"
                    placeholder="Insira o nome do representante"
                    onChange={handleChange}
                    name="nomeRepresentante"
                    required
                  />
                  <label htmlFor="sobrenome-pessoa-fisica">CNPJ*</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="cnpj-pj"
                    placeholder="Insira o CNPJ"
                    onChange={handleChange}
                    name="cnpj"
                    required
                  />
                </>
              )}
            </div>
            <div className="d-flex mt-5">
              <button
                className="text-white text-center bg-dark px-4 py-2 btn-cadastro"
                type="submit"
              >
                Avançar
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer id="cadastro-footer" />
    </>
  );
};

export default Registration;
