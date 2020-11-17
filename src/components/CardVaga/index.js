import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";

const CardVaga = (vaga) => {
  const { titleJob, description, id, jobOwner, perfilId } = vaga.vaga;

  const { user } = useAuth();

  return (
    <div className="card my-4 bg-lighter_ text-white shadow">
      <div className="card-body">
        <h4 className="card-title">{titleJob}</h4>
        <span>{jobOwner}</span>
        <p className="card-text">{description}</p>
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
            <></>
          )}
        </div>
        <ButtonLikeVaga />
      </div>
    </div>
  );
};

export default CardVaga;
