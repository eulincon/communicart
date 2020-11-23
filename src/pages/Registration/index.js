import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import { validarCNPJ, validarCPF } from "../../services/validation";

import { useAuth } from "../../contexts/auth";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";

const Registration = () => {
  const { user } = useAuth();
  const [cadastro, setCadastro] = useState({
    nome: "",
    sobrenome: "",
    nomeFantasia: "",
    nomeRepresentante: "",
    cpf: "",
    cnpj: "",
    tipoPessoa: 0,
  });
  let history = useHistory();

  function handleRadio(e) {
    setCadastro({ ...cadastro, tipoPessoa: Number(e.target.value) });
    console.log(cadastro);
  }

  function validateCadastro(cadastro) {
    let erros = [];
    if (cadastro.tipoPessoa === 0) {
      if (!validarCPF(cadastro.cpf)) {
        erros.push("CPF inválido.");
      }
      if (cadastro.nome.length < 3) {
        erros.push("O nome deve ter pelo menos 3 caracteres.");
      }
      if (cadastro.sobrenome.length < 3) {
        erros.push("O sobrenome deve ter pelo menos 3 caracteres.");
      }
    } else {
      if (!validarCNPJ(cadastro.cnpj)) {
        erros.push("CNPJ inválido.");
      }
      if (cadastro.nomeFantasia.length < 3) {
        erros.push("O nome fantasia deve ter pelo menos 3 caracteres.");
      }
      if (cadastro.nomeRepresentante.length < 3) {
        erros.push("O nome do representante deve ter pelo menos 3 caracteres.");
      }
    }
    return erros;
  }

  function handleChange(e) {
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    let erros = validateCadastro(cadastro);
    if (erros) {
      erros.forEach((erro) => alert(erro));
      return;
    }
    const res = await api
      .patch(`/api/perfil/${user.id}`, cadastro)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        console.log(err.response);
        console.log("Este é o erro");
        alert("Ops! Algo de errado aconteceu. :/");
      });
    if (res.status === 200) {
      history.push("/criar-perfil");
    }
  }

  return (
    <>
      <header>
        <Menu />
      </header>
      <div className="py-5 full-cadastro text-white">
        <div className="container bg-lighter_ py-3 px-5 form-box">
          <h1 className="text-center">Cadastro</h1>
          <form id="cadastro" className="mb-3" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className="form-check form-check-inline mr-5">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tipoCadastro"
                  id="cadastro-cpf"
                  value={0}
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
                  value={1}
                  onChange={handleRadio}
                  required
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Pessoa Jurídica
                </label>
              </div>
            </div>
            <div className="form-group mb-5">
              {cadastro.tipoPessoa === 0 ? (
                <>
                  <label htmlFor="nome-pessoa-fisica">Nome*</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="nome-pessoa-fisica"
                    placeholder="Insira seu nome"
                    onChange={handleChange}
                    value={cadastro.nome}
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
                    value={cadastro.sobrenome}
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
                    value={cpfMask(cadastro.cpf)}
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
                    value={cadastro.nomeFantasia}
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
                    value={cadastro.nomeRepresentante}
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
                    value={cnpjMask(cadastro.cnpj)}
                    name="cnpj"
                    required
                  />
                </>
              )}
            </div>
            <div className="d-flex mt-5">
              <button
                className="text-center bg-dark px-4 py-2 btn-cadastro txt-secondary_"
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

const cpfMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
};

const cnpjMask = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d{3})/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d{3})/, "$1.$2")
    .replace(/(\d{3})(\d{4})/, "$1/$2")
    .replace(/(\/\d{4})(\d{2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};
