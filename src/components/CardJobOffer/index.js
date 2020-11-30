import React from "react";

const colorVaga = (status) => {
  if(status === 'ATIVA') return ('badge-success')
  if(status === 'DESATIVADA') return ('badge-secondary')
  if(status === 'BLOQUEADA') return ('badge-danger')
  if(status === 'CONCLUIDA') return ('badge-primary')
  if(status === 'EM_ANDAMENTO') return ('badge-warning')
}

const CardJobOffer = ({vaga}) => {
  return (
    <div className="card my-4 bg-lighter_ text-white">
      <div className="card-body">
        <h4 className="card-title">{vaga.title}</h4>
        <h5>Example heading <span className={`badge ${colorVaga(vaga.statusVaga)}`}>{vaga.statusVaga}</span></h5>
        <br></br>
        <p className="card-text">
          {vaga.description}
        </p>
        <div>
          <button type="button" className="btn btn-success">
            Ver vaga
          </button>
          <button type="button" className="btn btn-warning ml-2">
            Editar vaga
          </button>
          <button type="button" className="btn btn-danger ml-2">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardJobOffer;
