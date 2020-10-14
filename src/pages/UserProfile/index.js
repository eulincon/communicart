import React, { useState } from "react";
import "./styles.css";

import MainComponents from "../../components/MainComponents";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const UserProfile = () => {
  const bio = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
  soluta saepe dolorem a ratione necessitatibus ipsam incidunt
  adipisci voluptatibus. Ut iusto eligendi delectus, iure eius sunt
  temporibus repellendus dicta consequatur? Placeat incidunt impedit
  culpa asperiores possimus alias illo laudantium accusantium dolore
  enim veritatis quas id unde dolorum suscipit, porro doloribus.`;
  const servicos = ["Redação", "Edição"];
  const midias = {
    facebook: "www.facebook.com",
    instagram: "www.instagram.com",
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
            src="https://i.ibb.co/dJ815rh/pp.jpg"
            alt=""
            className="img-round w-100"
          />
        </div>
        <div className="col-sm-9 text-white">
          <h1>Hillary Endo</h1>
          <h4>Cadastro feito em 08/09/2020</h4>
          <h4>Tipo de freelancer: {"Pessoa Física"}</h4>
          <h4>Bio:</h4>
          <p>{bio}</p>
        </div>
      </div>
      <hr className="divider" />
      <div className="text-white servicos">
        <h4>Serviços oferecidos:</h4>
        <ul className="ml-5">
          {servicos ? (
            servicos.map((servico, index) => <li key={index}>{servico}</li>)
          ) : (
            <p>Não há serviços cadastrados</p>
          )}
        </ul>
      </div>
      <hr className="divider" />
      <div className="midias-sociais text-white">
        <h4>Midias sociais</h4>
        <div className="links">
          {Object.entries(midias).map((midia, index) => {
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
