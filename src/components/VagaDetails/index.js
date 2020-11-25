import React from "react";

import { ReactComponent as IconFixingBugs } from "../../assets/images/vaga_details/undraw_fixing_bugs.svg";
import { ReactComponent as IconOptimizeImage } from "../../assets/images/vaga_details/undraw_Optimize_image.svg";
import { ReactComponent as IconPhotograph } from "../../assets/images/vaga_details/undraw_Photograph.svg";
import { ReactComponent as IconTeamUp } from "../../assets/images/vaga_details/undraw_team_up.svg";

import ButtonLikeVaga from "../../components/CardVaga/ButtonLikeVaga";

const VagaDetails = (props) => {
  let { vaga } = props;

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
  } = vaga;

  console.log(titleJob);

  return (
    <>
      <div className="shadow card">
        <div className="card-body bg-lighter_ text-white">
          <h5 className="card-title text-center">{titleJob}</h5>
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
            <span className="font-weight-bold">Estimativa de preço: </span>
            {"R$ "}
            {price.toFixed(2)}
          </div>
          <hr />
          <div>
            <span className="font-weight-bold">Habilidades: </span> Pintura em
            aquarela.
          </div>
          <div>
            <span className="font-weight-bold">Experiências: </span>{" "}
            intermadiário.
          </div>
          <hr />
          <h2>Imagens e documentos</h2>
          <div className="row jumbotron">
            <IconFixingBugs className="col border img-thumbnail" />
            <IconOptimizeImage className="col border img-thumbnail" />
            <IconPhotograph className="col border img-thumbnail" />
            <IconTeamUp className="col border img-thumbnail" />
          </div>

          <button
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            className="btn btn-secondary_"
          >
            Candidatar-me
          </button>
          <ButtonLikeVaga />
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
              <button type="button" className="btn btn-primary bg-secondary_">
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
