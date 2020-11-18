import React, { useState } from "react";
import api from '../../services/api';

import "./styles.css";
import SkeletonPage from "../../components/SkeletonPage";
import { useHistory } from "react-router-dom";

function CadastroJob() {
  const history = useHistory();
  const [propostaPreco, setPropostaPreco] = useState(0.0);
  const [tituloJob, setTituloJob] = useState("");
  const [tipoJob, setTipoJob] = useState("");
  const [nivelExpJob, setNivelExpJob] = useState("");
  const [descricaoJob, setDescricaoJob] = useState("");
  const [dataPagamento, setDataPagamento] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  const [pagamentoNegociar, setPagamentoNegociar] = useState(false);
  const [prazoNegociar, setPrazoNegociar] = useState(false);
  const [contatoEmail, setContatoEmail] = useState(false);
  const [contatoTelefone, setContatoTelefone] = useState(false);
  const [contatoLinkedin, setcontatoLinkedin] = useState(false);
  const [contatoInsta, setcontatoInsta] = useState(false);
  const [contatoFacebook, setContatoFacebook] = useState(false);
  const [contatoTwitter, setContatoTwitter] = useState(false);
  const [arquivoUpload, setArquivoUpload] = useState(false);
  const contactForms = {
    instagram: contatoInsta,
    linkedin: contatoLinkedin,
    // telefone: contatoTelefone,
    facebook: contatoFacebook,
    twitter: contatoTwitter,
    email: contatoEmail,
    other: "other"
  };

  function prazoANegociar() {
    setPrazoNegociar(!prazoNegociar);
    document.getElementById(
      "dataPagamento"
    ).disabled = !document.getElementById("dataPagamento").disabled;
  }

  function compareDates(date) {
    let parts = date.split("-");
    let today = new Date();
    date = new Date(parts[0], parts[1] - 1, parts[2]);
    return date >= today ? true : false;
  }

  async function handleCadastro(e) {
    e.preventDefault();
    // let data = new Date();
    // let dia = data.getDate();
    // let mes = data.getMonth();
    // let ano = data.getFullYear();
    // let resp = compareDates(dataPagamento);

    if (prazoNegociar || compareDates(dataPagamento) === true) {
        const cadastroJob = {
          titleJob:tituloJob,
          typeJob: tipoJob,
          description: descricaoJob,
          price: propostaPreco,
          // dataPagamento,
          // prazoNegociar,
          paymentType: formaPagamento,
          paymentToNegotiate: pagamentoNegociar,
          contactForms,
          // arquivoUpload,
        };

        console.log(arquivoUpload);
        console.log(cadastroJob);

        await api.post('/api/vagas', cadastroJob)
        .then(response => {
          alert('Vaga cadastrada com sucesso!');
          history.push('feed');
        })
        .catch(err => {
          alert('Ops! Algum erro inesperado ocorreu! :/');
        })
    } else {
      alert("data invalida ");
    }
  }

  return (
    <>
      <SkeletonPage sidebar={true} footer={true}>
        <div className="row d-flex">
          <div className="col cadastro-job">
            <form
              className="container-fluid d-flex flex-column"
              onSubmit={handleCadastro}
            >
              <h1 className="align-self-center">Cadastro Job</h1>
              <section className="row ">
                <div className="col-6 d-flex flex-column ">
                  <section>
                    <label for="tituloJob">Título do job</label>
                    <input
                      type="text"
                      className="form-control"
                      id="tituloJob"
                      value={tituloJob}
                      onChange={(e) => setTituloJob(e.target.value)}
                      required
                    />
                  </section>
                  <section>
                    <label for="tipoJob">Tipo de job</label>
                    <select
                      class="custom-select"
                      id="tipoJob"
                      size="3"
                      value={tipoJob}
                      onChange={(e) => setTipoJob(e.target.value)}
                      required
                    >
                      <option value="1">Fotografia</option>
                      <option value="2">Design</option>
                      <option value="3">Edição de Imagem</option>
                      <option value="4">Redação</option>
                      <option value="5">Ilustração</option>
                      {/* <option value="5">Edição de video</option> */}
                    </select>
                  </section>
                  <br />
                  <hr />
                </div>
                <div className="col-6">
                  <label for="descricaoJob">Descrição</label>
                  <textarea
                    class="form-control"
                    id="descricaoJob"
                    rows="6"
                    value={descricaoJob}
                    onChange={(e) => setDescricaoJob(e.target.value)}
                    required
                  ></textarea>
                </div>
              </section>
              <br />
              <hr />
              <h3 className="align-self-center">Anexar arquivos</h3>
              <section className="row justify-content-start">
                <div className="col-6 d-flex flex-column ">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      accept="application/pdf"
                      placeholder="Adicione um arquivo PDF"
                      onChange={(e) => setArquivoUpload(e.target.files[0])}
                    />
                    <label class="custom-file-label" for="customFile">
                      Anexar Arquivo
                    </label>
                  </div>
                </div>
              </section>

              <br />
              <hr />
              <h3 className="align-self-center">Datas e pagamento</h3>
              <section className="row">
                <div className="col-6 justify-content-start">
                  <label for="faixaPreco">Faixa de preço</label>
                  <div className="d-flex ">
                    <input
                      type="number"
                      className="form-control mr-3"
                      id="faixaPrecoMin"
                      placeholder="R$ min"
                      min="1"
                      value={propostaPreco}
                      onChange={(e) =>
                        setPropostaPreco(parseFloat(e.target.value))
                      }
                      required
                    />
                  </div>
                  <br />
                  <label for="prazoPagamento">Prazo de pagamento</label>
                  <div className="row">
                    <input
                      type="date"
                      className="form-control col-5 ml-3"
                      id="dataPagamento"
                      value={dataPagamento}
                      onChange={(e) => setDataPagamento(e.target.value)}
                      required
                    />
                    <section className=" col-6 ml-3">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={true}
                        id="prazoNegociar"
                        onChange={(e) => prazoANegociar()}
                      />
                      <label className="form-check-label" for="prazoNegociar">
                        A definir/negociar
                      </label>
                    </section>
                  </div>
                  <br />
                  <label for="prazoPagamento"> Forma de pagamento</label>
                </div>
              </section>
              <div className="row ml-1">
                <select
                  class="custom-select col-4"
                  size="3"
                  id="formaPagamento"
                  value={formaPagamento}
                  onChange={(e) => setFormaPagamento(e.target.value)}
                  required
                >
                  <option value="BOLETO">Boleto</option>
                  <option value="CREDITO">Crédito</option>
                  <option value="DEBITO">Debito</option>
                  <option value="PAYPAL">Paypal</option>
                  <option value="PICPAY">Picpay</option>
                </select>
                <section className="col ml-3">
                  <div className="row">
                    <div className="col-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="PagamentoNegociar"
                        value={pagamentoNegociar}
                        onChange={(e) => setPagamentoNegociar(e.target.value)}
                      />
                      <label
                        className="form-check-label"
                        for="PagamentoNegociar"
                      >
                        A definir/negociar
                      </label>
                    </div>
                  </div>
                </section>
              </div>
              <br />
              <hr />
              <h3 className="align-self-center">Formas de Contato</h3>
              <section className="d-flex flex-column ">
                <div className="col-10 align-self-center">
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoEmail"
                      onChange={(e) => setContatoEmail(e.target.value)}
                    />

                    <label className="form-check-label" for="contatoEmail">
                      E-mail
                    </label>
                  </section>
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoTelefone"
                      onChange={(e) => setContatoTelefone(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoTelefone">
                      Telefone
                    </label>
                  </section>
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoLinkedin"
                      onChange={(e) => setcontatoLinkedin(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoLinkedin">
                      Linkedin
                    </label>
                  </section>
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoInsta"
                      onChange={(e) => setcontatoInsta(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoInsta">
                      Instagram
                    </label>
                  </section>
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoFacebook"
                      onChange={(e) => setContatoFacebook(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoFacebook">
                      Facebook
                    </label>
                  </section>
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoTwitter"
                      onChange={(e) => setContatoTwitter(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoTwitter">
                      Twitter
                    </label>
                  </section>
                </div>
              </section>
              <br />
              <hr />

              <button
                type="submit"
                className="btn align-self-center btn-secondary_"
              >
                Publicar
              </button>
              <br />
              <br />
            </form>
          </div>
        </div>
      </SkeletonPage>
    </>
  );
}
export default CadastroJob;
