import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";

const CardVaga = (vaga) => {
  const { titleJob, description, id, jobOwner, perfilId, typeJob } = vaga.vaga;

  const { user } = useAuth();

  return (
    <div className="card my-4 bg-lighter_ text-white shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title">{titleJob}</h4>
          <h4>
            <span className="badge badge-info bg-text-complement p-2">
              {typeJob}
            </span>
          </h4>
        </div>
        <span>Contratante: {jobOwner}</span>
        <p className="card-text">Descrição: {description}</p>
        <div>
          <Link to={`/vagas/${id}`} className={`btn btn-secondary_`}>
            Ver mais
          </Link>
          {user.id === perfilId ? (
            <>
              <Link
                to={`/vagas/editar/${id}`}
                className={"btn btn-primary_ ml-2"}
              >
                Editar
              </Link>
              <button className={"btn btn-danger ml-2"}>Desativar</button>
            </>
          ) : (
            <ButtonLikeVaga />
          )}
        </div>
      </div>
    </div>
  );
};

export default CardVaga;
