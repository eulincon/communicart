import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./styles.css";
import api from '../../services/api';
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

import Footer from "../../components/Footer";
import { useAuth } from "../../contexts/auth";

const CreateProfile = () => {
  const {user} = useAuth();
  let history = useHistory();

  const [perfil, setPerfil] = useState({
    bio: "",
    servicos: {
      fotografia: false,
      design: false,
      redacao: false,
      ilustracao: false,
      edicao: false,
    },
    website: "",
    imagemPerfil: "",
    interesses: [],
    midiasSociais: {
      facebook: "",
      twitter: "",
      linkedin: "",
      instagram: "",
    },
  });

  function handleChange(e) {
    setPerfil({ ...perfil, [e.target.name]: e.target.value });
  }

  function handleInteresses(e) {
    let listaInteresses = e.target.value
      .split(",")
      .map((interesse) => interesse.trim());
    setPerfil({ ...perfil, interesses: listaInteresses });
  }

  function handleServicos(e) {
    setPerfil({
      ...perfil,
      servicos: { ...perfil.servicos, [e.target.value]: e.target.checked },
    });
  }

  function handleSocialMedia(e) {
    setPerfil({
      ...perfil,
      midiasSociais: { ...perfil.midiasSociais, [e.target.name]: e.target.value },
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(perfil);
    const bodyRequest = Object.assign({}, perfil);
    delete bodyRequest.imagemPerfil;
    console.log(bodyRequest);
    const res = await api.put(`/api/perfil/${user.id}`, bodyRequest)
      .then(response => {
        console.log('Tudo ok');
        return response;
      })
      .catch(err => {
        console.log('Tudo errou');
        console.log(err);
        alert("Ops! Algo de errado aconteceu. :/");
      });
      if(res.status === 204) history.push("/feed");
  }

  return (
    <>
      <div className="py-5 full-editar-perfil text-white">
        <div className="container bg-lighter_ py-3 px-5 form-box">
          <h1 className="text-center">Edição de Perfil</h1>
          <form id="editar-perfil" className="mb-5">
            <div className="form-group mb-4">
              <label htmlFor="bio">Bio/descrição</label>
              <textarea
                className="form-control"
                id="bio"
                rows="10"
                placeholder="Fale sobre sua experiência e história"
                name="bio"
                onChange={handleChange}
              ></textarea>
            </div>
            <label htmlFor="checkbox-servicos">Serviços oferecidos</label>
            <div
              className="form-group form-servicos mb-4"
              id="checkbox-servicos"
            >
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input checkbox-servico mr-3"
                  type="checkbox"
                  id="fotografia"
                  value="fotografia"
                  onChange={handleServicos}
                />
                <label className="form-check-label" htmlFor="fotografia">
                  Fotografia
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input checkbox-servico mr-3"
                  type="checkbox"
                  id="design"
                  value="design"
                  onChange={handleServicos}
                />
                <label className="form-check-label" htmlFor="design">
                  Design
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input checkbox-servico mr-3"
                  type="checkbox"
                  id="redacao"
                  value="redacao"
                  onChange={handleServicos}
                />
                <label className="form-check-label" htmlFor="redacao">
                  Redação
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input checkbox-servico mr-3"
                  type="checkbox"
                  id="ilustracao"
                  value="ilustracao"
                  onChange={handleServicos}
                />
                <label className="form-check-label" htmlFor="ilustracao">
                  Ilustração
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input checkbox-servico mr-3"
                  type="checkbox"
                  id="edicao"
                  value="edicao"
                  onChange={handleServicos}
                />
                <label className="form-check-label" htmlFor="edicao">
                  Edição
                </label>
              </div>
            </div>
            <div className="form-group mb-4">
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="portfolio">Portfólio/Website</label>
                  <input
                    type="text"
                    className="form-control mb-4"
                    id="portfolio"
                    placeholder="Insira o link"
                    name="website"
                    onChange={handleChange}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="inserir-imagem">Adicionar imagem</label>
                  <div className="custom-file" id="inserir-imagem">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="imagem-perfil"
                      name="imagemPerfil"
                      onChange={handleChange}
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="imagem-perfil"
                    >
                      Anexe uma foto
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-group mb-4">
                <label htmlFor="interesses">Interesses</label>
                <textarea
                  className="form-control"
                  id="bio"
                  rows="3"
                  placeholder="Insira uma lista de interesses separada por vírgulas"
                  name="interesses"
                  onChange={handleInteresses}
                ></textarea>
              </div>
              <label htmlFor="social-media">Redes sociais</label>
              <div className="form-group mb-4" id="social-media">
                <div className="row social-row mb-3">
                  <label htmlFor="facebook" className="col-sm-1 col-form-label">
                    <FaFacebookSquare size={36} />
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      name="facebook"
                      id="facebook"
                      placeholder="Insira o link"
                      className="form-control"
                      onChange={handleSocialMedia}
                    />
                  </div>
                  <label htmlFor="twitter" className="col-sm-1 col-form-label">
                    <FaTwitterSquare size={36} />
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder="Insira o link"
                      className="form-control"
                      onChange={handleSocialMedia}
                    />
                  </div>
                </div>
                <div className="row social-row">
                  <label htmlFor="linkedin" className="col-sm-1 col-form-label">
                    <FaLinkedin size={36} />
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      name="linkedin"
                      id="linkedin"
                      placeholder="Insira o link"
                      className="form-control"
                      onChange={handleSocialMedia}
                    />
                  </div>
                  <label
                    htmlFor="instagram"
                    className="col-sm-1 col-form-label"
                  >
                    <FaInstagramSquare size={36} />
                  </label>
                  <div className="col-sm-5">
                    <input
                      type="text"
                      name="instagram"
                      id="instagram"
                      placeholder="Insira o link"
                      className="form-control"
                      onChange={handleSocialMedia}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="d-flex mt-5 mb-3">
            <button
              className="text-center bg-dark px-4 py-2 btn-cadastro txt-secondary_"
              onClick={handleSubmit}
            >
              Avançar
            </button>
          </div>
        </div>
      </div>
      <Footer id="cadastro-footer" />
    </>
  );
};

export default CreateProfile;
