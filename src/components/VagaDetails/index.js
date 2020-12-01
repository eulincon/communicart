import React, { useState } from "react";
import api from "../../services/api";

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";
import { useHistory } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { useAuth } from "../../contexts/auth";

const VagaDetails = (props) => {
  const { user } = useAuth();
  const history = useHistory();
  let { vaga } = props;
  const [deliveryDate, setDeliveryDate] = useState(Date);
  const [observations, setObservations] = useState("");
  const [propostaPrice, setPropostaPrice] = useState(0);

  if (vaga === null)
    return <h3 className="text-white text-center">Vaga não encontrada...</h3>;

  const {
    description,
    fileURL,
    jobOwner,
    paymentToNegotiate,
    paymentType,
    price,
    statusVaga,
    titleJob,
    typeJob,
    paymentDate,
  } = vaga;

  console.log(paymentDate);

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

  async function propostaSubmit() {
    const date = new Date(deliveryDate);
    const body = {
      deliveryDate: date.toISOString(),
      price: propostaPrice,
      observations,
    };
    await api
      .post(`/api/vagas/${vaga.id}/candidatarse`, body)
      .then((response) => {
        alert("Candidatura cadastrada com sucesso");
        history.push("/feed");
      })
      .catch((err) => alert(err.response.data.message));
  }

  return (
    <>
      <div className="shadow card">
        <div className="card-body bg-lighter_ text-white">
          <h4 className="card-title text-center">{titleJob} </h4>
          <h4 className="text-right">
            {statusBadge()}
            <span className="badge badge-info bg-text-complement p-2 ml-2">
              {typeJob}
            </span>
          </h4>
          <div>
            <span className="font-weight-bold">Nome do contratante: </span>
            {jobOwner}
          </div>
          <br />
          <span className="font-weight-bold">Descrição</span>
          <p className="card-text text-justify">{description}</p>
          <hr />
          <div>
            <span className="font-weight-bold">Forma de pagamento: </span>{" "}
            {paymentToNegotiate ? "A combinar" : paymentType}
          </div>
          <div>
            <span className="font-weight-bold">Orçamento aproximado: </span>
            {"R$ "}
            {price.toFixed(2)}
          </div>
          <div>
            <span className="font-weight-bold">Prazo para pagamento: </span>
            {paymentDate === null ? "A combinar" : paymentDate}
          </div>
          <hr />
          {fileURL !== null ? (
            <>
              <h2>Documento de especificações</h2>
              <div className="row ml-2">
                <a href={fileURL} target="_blank">
                  <i className="fas fa-file-pdf fa-7x"></i>
                </a>
              </div>
            </>
          ) : (
            <></>
          )}

          <br />
          {user.id === vaga.perfilId ? null : (
            <>
              <button
                type="button"
                data-toggle="modal"
                data-target="#exampleModal"
                className="btn btn-secondary_"
              >
                Candidatar-me
              </button>
              <ButtonLikeVaga />
            </>
          )}
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-primary_ text-white">
              <h5 className="modal-title" id="exampleModalLabel">
                Proposta
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body bg-lighter_ text-white">
              {/* Form proposta */}
              <form>
                <div className="form-row">
                  <div className="form-group col">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Valor:*
                    </label>
                    <input
                      type="number"
                      min="0.00"
                      max="10000.00"
                      step="0.10"
                      className="form-control"
                      id="recipient-name"
                      onChange={(e) => setPropostaPrice(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group col">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Data de entrega:*
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="recipient-name"
                      onChange={(e) => setDeliveryDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message-text" className="col-form-label">
                    Comentários e observações:
                  </label>
                  <textarea
                    className="form-control"
                    id="message-text"
                    onChange={(e) => setObservations(e.target.value)}
                    placeholder="O que você quer que o contratante saiba?"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer bg-lighter_">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Fechar
              </button>
              <button
                type="button"
                onClick={propostaSubmit}
                className="btn btn-primary bg-secondary_"
                data-dismiss="modal"
                aria-label="Close"
              >
                Enviar proposta
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VagaDetails;
