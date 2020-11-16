import React from "react";
import { Link } from "react-router-dom";

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";

const CardVaga = (vaga) => {
  const { titleJob, description, id, jobOwner } = vaga.vaga;

  return (
    <div className="card my-4 bg-lighter_ text-white shadow">
      <div className="card-body">
        <h4 className="card-title">{titleJob}</h4>
        <span>{jobOwner}</span>
        <p className="card-text">{description}</p>
        <Link to={`/vagas/${id}`} className={`btn btn-primary btn-secondary_`}>
          Ver mais
        </Link>
        <ButtonLikeVaga />
      </div>
    </div>
  );
};

export default CardVaga;
