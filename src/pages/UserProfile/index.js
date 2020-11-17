import React from "react";
import "./styles.css";

import MainComponents from "../../components/MainComponents";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const UserProfile = () => {
  const usuario = {
    bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
    soluta saepe dolorem a ratione necessitatibus ipsam incidunt
    adipisci voluptatibus. Ut iusto eligendi delectus, iure eius sunt
    temporibus repellendus dicta consequatur? Placeat incidunt impedit
    culpa asperiores possimus alias illo laudantium accusantium dolore
    enim veritatis quas id unde dolorum suscipit, porro doloribus.`,
    servicos: ["Redação", "Edição"],
    midias: {
      facebook: "www.facebook.com",
      instagram: "www.instagram.com",
    },
    imagem: "https://i.ibb.co/dJ815rh/pp.jpg",
    nome: "Hillary Endo",
    dataCadastro: "08/09/2020",
    tipo: "Pessoa Física",
  };

  function socialMediaLink(midia) {
    const site = midia[0];
    const link = midia[1];
    if (site === "facebook") {
      console.log(site);
      return (
        <a href={link} className="social-media-link">
          <FaFacebookSquare size={36} />
        </a>
      );
    } else if (site === "twitter") {
      return (
        <a href={link} className="social-media-link">
          <FaTwitterSquare size={36} />
        </a>
      );
    } else if (site === "instagram") {
      return (
        <a href={link} className="social-media-link">
          <FaInstagramSquare size={36} />
        </a>
      );
    } else if (site === "linkedin") {
      return (
        <a href={link} className="social-media-link">
          <FaLinkedin size={36} />
        </a>
      );
    }
  }

  return (
    <MainComponents>
      <div className="row">
        <div className="col-sm-3 img-container d-flex justify-content-center align-content-center">
          <img
            src={usuario.imagem}
            alt="imagem de perfil do usuário"
            className="img-round w-100"
          />
        </div>
        <div className="col-sm-9 text-white">
          <h1>{usuario.nome}</h1>
          <h4>Cadastro feito em {usuario.data}</h4>
          <h4>Tipo de freelancer: {usuario.tipo}</h4>
          <h4>Bio:</h4>
          <p>{usuario.bio}</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="text-white servicos">
        <h4>Serviços oferecidos:</h4>
        <ul className="ml-5">
          {usuario.servicos ? (
            usuario.servicos.map((servico, index) => (
              <li key={index}>{servico}</li>
            ))
          ) : (
            <p>Não há serviços cadastrados</p>
          )}
        </ul>
      </div>
      <hr className="divider" />
      <div className="midias-sociais text-white">
        <h4>Midias sociais</h4>
        <div className="links">
          {Object.entries(usuario.midias).map((midia, index) => {
            return (
              <span key={index} className="mr-5">
                {socialMediaLink(midia)}
              </span>
            );
          })}
        </div>
      </div>
    </MainComponents>
  );
};

export default UserProfile;
