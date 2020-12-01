import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../contexts/auth";

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";
import api from "../../services/api";

const CardVaga = (vaga) => {
  const {
    titleJob,
    description,
    id,
    jobOwner,
    perfilId,
    typeJob,
    statusVaga,
  } = vaga.vaga;

  function statusBadge() {
    let color =
      statusVaga === "ATIVA" || statusVaga === "EM_ANDAMENTO"
        ? "bg-secondary_"
        : statusVaga === "CONCLUIDA"
        ? "bg-primary-lighter"
        : "bg-danger";
    let text =
      statusVaga === "CONCLUIDA"
        ? "Concluída"
        : statusVaga === "EM_ANDAMENTO"
        ? "Em andamento"
        : statusVaga.charAt(0) + statusVaga.slice(1).toLowerCase();

    return (
      <span className={`badge badge-info ${color} p-2 ml-auto`}>{text}</span>
    );
  }

  const history = useHistory();
  const { user } = useAuth();

  async function handleDesativarVaga(idVaga){
    await api.patch(`/api/vagas/${idVaga}?statusUpdate=BLOQUEADA`)
    .then(() => {
      alert('Vaga bloqueada com sucesso!')
      history.push('/contratante/vagas/bloqueada')
    })
    .catch(err => {
      console.log(err)
      alert('Erro ao alterar status da vaga.')
    })
  }

  return (
    <div className="card my-4 bg-lighter_ text-white shadow">
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h4 className="card-title">{titleJob}</h4>
          <h4>
            {statusBadge()}
            <span className="badge badge-info bg-text-complement p-2 ml-2">
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
              {vaga.vaga.statusVaga !== 'EM_ANDAMENTO' ?
                <Link onClick={() => handleDesativarVaga(vaga.vaga.id)} className={"btn btn-danger ml-2"}>Bloquear</Link>
                : null
              }
              {vaga.vaga.statusVaga === 'EM_ANDAMENTO' ? 
                <Link className={"btn btn-primary ml-2"}>Finalizar Job</Link> 
                : null
              }
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
