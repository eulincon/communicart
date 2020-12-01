import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/auth";
import{ Modal } from '@material-ui/core';
import{ Rating } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";
import api from "../../services/api";

const CardVaga = (vaga) => {
  const history = useHistory();
  const { tipoUsuario } = useParams();
  const { user } = useAuth();
  const [showModalAvaliarFreelancer, setShowModalAvaliarFreelancer] = useState(false);
  const [showModalAvaliarContratante, setShowModalAvaliarContratante] = useState(false);
  const [rating, setRating] = useState(3);
  
  const {
    titleJob,
    description,
    id,
    jobOwner,
    perfilId,
    typeJob,
    statusVaga,
  } = vaga.vaga;
  
  const modalStyles = makeStyles((theme) => ({
    paper: {
      marginTop: '20%',
      position: 'relative',
      margin: 'auto',
      width: 400,
      backgroundColor: 'grey',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));
  const classes = modalStyles();

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

  async function handleChangeStatusVaga(idVaga, statusVaga){
    await api.patch(`/api/vagas/${idVaga}?statusUpdate=${statusVaga}`)
    .then(() => {
      if(statusVaga === 'ATIVA'){
        alert('Vaga ativada com sucesso!')
        history.push('/contratante/vagas/ATIVA')
      }else if(statusVaga === 'BLOQUEADA'){
        alert('Vaga bloqueada com sucesso!')
        history.push('/contratante/vagas/BLOQUEADA')
      }
    })
    .catch(err => {
      console.log(err)
      alert('Erro ao alterar status da vaga.')
    })
  }

  function handleModalFinalizarVaga(){
    setShowModalAvaliarFreelancer(!showModalAvaliarFreelancer)
  }
  function handleModalAvaliarContratante(){
    setShowModalAvaliarContratante(!showModalAvaliarContratante)
  }

  async function handleFinalizarVaga(idVaga, rateContratante) {
    console.log('idVaga: ' + idVaga, 'rateContratante: ' + rateContratante)
    await api.patch(`/api/vagas/${idVaga}/concluirVaga?rateContratante=${rateContratante}`)
    .then(response => {
      alert('Vaga finalizada com sucesso!')
      history.go('/contratante/vagas/ativa')
    })
    .catch(err => {
      console.log(err)
      alert("Ocorreu um erro ao finalizar a vaga");
    })
  }

  async function handleAvaliarContratante(){
    console.log('Avaliar contratante')
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
              {vaga.vaga.statusVaga === 'CONCLUIDA' ? null : 
                (vaga.vaga.statusVaga !== 'EM_ANDAMENTO' && vaga.vaga.statusVaga !== 'BLOQUEADA' ?
                  <Link onClick={() => handleChangeStatusVaga(vaga.vaga.id, 'BLOQUEADA')} className={"btn btn-danger ml-2"}>Bloquear</Link>
                  : 
                vaga.vaga.statusVaga === 'BLOQUEADA' ? 
                  <Link onClick={() => handleChangeStatusVaga(vaga.vaga.id, 'ATIVA')} className={"btn btn-primary ml-2"}>Desbloquear</Link>
                  : ''
                )
              }
              {vaga.vaga.statusVaga === 'EM_ANDAMENTO' ? 
                <Link className={"btn btn-primary ml-2"} onClick={handleModalFinalizarVaga}>Finalizar Job</Link> 
                : null
              }
            </>
          ) : (
            <ButtonLikeVaga />
          )}
          {tipoUsuario === 'freelancer' && vaga.vaga.rateContratante !== null && vaga.vaga.rateFreela == null ? (
            <button className="btn btn-primary ml-2" onClick={handleModalAvaliarContratante}>Avaliar contratante</button>
          ) : null}
        </div>
      </div>
      <Modal
        open={showModalAvaliarFreelancer}
        // onClose={handleModalFinalizarVaga}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ><div className={`text-light ${classes.paper}`}>
          <div className="d-flex">
            <button className="ml-auto btn btn-secondary_" onClick={handleModalFinalizarVaga}>x</button>
          </div>
          <hr/>
          <div className="text-center">
            <p>Avalie o freelancer</p>
            <Rating 
              name="size-large"
              defaultValue={3}
              size="large"
              onChange={(event, newValue) => setRating(newValue)}/>
              <button className="btn btn-secondary_ mt-1" onClick={() => handleFinalizarVaga(vaga.vaga.id, rating)}>Confirmar Avaliação</button>
          </div>
        </div>
      </Modal>

      <Modal
        open={showModalAvaliarContratante}
        // onClose={handleModalFinalizarVaga}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      ><div className={`text-light ${classes.paper}`}>
          <div className="d-flex">
            <button className="ml-auto btn btn-secondary_" onClick={handleModalAvaliarContratante}>x</button>
          </div>
          <hr/>
          <div className="text-center">
            <p>Avalie o contratante</p>
            <Rating 
              name="size-large"
              defaultValue={3}
              size="large"
              onChange={(event, newValue) => setRating(newValue)}/>
              <button className="btn btn-secondary_ mt-1" onClick={() => handleAvaliarContratante(vaga.vaga.id, rating)}>Confirmar Avaliação</button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default CardVaga;
