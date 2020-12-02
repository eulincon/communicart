import React, { useState, useEffect } from "react";
import api from "../../services/api";

import "./styles.css";
import SkeletonPage from "../../components/SkeletonPage";
import { useHistory } from "react-router-dom";

function CadastroJob() {
  const history = useHistory();
  const [propostaPreco, setPropostaPreco] = useState(0.0);
  const [tituloJob, setTituloJob] = useState("");
  const [tipoJob, setTipoJob] = useState("1");
  const [descricaoJob, setDescricaoJob] = useState("");
  const [dataPagamento, setDataPagamento] = useState(new Date());
  const [formaPagamento, setFormaPagamento] = useState("BOLETO");
  const [pagamentoNegociar, setPagamentoNegociar] = useState(false);
  const [prazoNegociar, setPrazoNegociar] = useState(false);
  const [contatoEmail, setContatoEmail] = useState(false);
  const [contatoLinkedin, setcontatoLinkedin] = useState(false);
  const [contatoInsta, setcontatoInsta] = useState(false);
  const [contatoFacebook, setContatoFacebook] = useState(false);
  const [contatoTwitter, setContatoTwitter] = useState(false);
  const [arquivoUpload, setArquivoUpload] = useState([]);
  const contactForms = {
    instagram: contatoInsta,
    linkedin: contatoLinkedin,
    // telefone: contatoTelefone,
    facebook: contatoFacebook,
    twitter: contatoTwitter,
    email: contatoEmail,
    other: "other",
  };

  useEffect(() => {}, [tipoJob, formaPagamento]);

  function prazoANegociar() {
    setPrazoNegociar(!prazoNegociar);
    document.getElementById(
      "dataPagamento"
    ).disabled = !document.getElementById("dataPagamento").disabled;
  }

  function pagamentoAnegociar() {
    setPagamentoNegociar(!pagamentoNegociar);
    document.getElementById(
      "formaPagamento"
    ).disabled = !document.getElementById("formaPagamento").disabled;
  }

  function compareDates(date) {
    let today = new Date();
    date = new Date(date);
    return date >= today ? true : false;
  }

  function handleFiles(e) {
    let file = e.target.files[0];
    if (file === undefined) {
      return;
    }
    if (!file.type.includes("pdf")) {
      alert("Só é possível carregar arquivos PDF.");
    } else {
      setArquivoUpload([file]);
      let newLi = document.getElementById("file-name");
      newLi.innerText = file.name;
      newLi.classList.remove("d-none");
      newLi.onclick = handleLiClick;
    }
  }

  function handleLiClick(e) {
    setArquivoUpload([]);
    e.target.classList.add("d-none");
  }

  async function handleCadastro(e) {
    e.preventDefault();
    // let data = new Date();
    // let dia = data.getDate();
    // let mes = data.getMonth();
    // let ano = data.getFullYear();
    // let resp = compareDates(dataPagamento);

    if (prazoNegociar || compareDates(dataPagamento) === true) {
      let date = null;
      if (dataPagamento !== null) {
        let paydate = new Date(dataPagamento);
        date = new Date(
          paydate.getTime() + 60000 * paydate.getTimezoneOffset()
        );
      }
      const cadastroJob = {
        titleJob: tituloJob,
        typeJob: tipoJob,
        description: descricaoJob,
        price: propostaPreco,
        paymentDate: prazoNegociar ? null : date.getTime(),
        paymentType: formaPagamento,
        paymentToNegotiate: pagamentoNegociar,
        contactForms,
      };

      if (arquivoUpload.length > 0) {
        let formData = new FormData();
        formData.append("file", arquivoUpload[0]);
        await api
          .post(`/api/awss3/files`, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then((res) => (cadastroJob.fileURL = res.data));
      }

      console.log(cadastroJob);

      await api
        .post("/api/vagas", cadastroJob)
        .then((response) => {
          alert("Vaga cadastrada com sucesso!");
          history.push("feed");
        })
        .catch((err) => {
          alert("Ops! Algum erro inesperado ocorreu! :/");
        });
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
                      defaultValue="1"
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
              <h3 className="align-self-center">
                Anexar especificações adicionais
              </h3>
              <section className="row justify-content-start">
                <div className="col-6 d-flex flex-column ">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                      accept="application/pdf"
                      placeholder="Adicione arquivos PDF"
                      multiple="multiple"
                      onChange={handleFiles}
                    />
                    <label class="custom-file-label" for="customFile">
                      Anexe um arquivo PDF
                    </label>
                  </div>
                  <ul className="mt-2 ml-4">
                    <li id="file-name" className="d-none"></li>
                  </ul>
                </div>
              </section>

              <br />
              <hr />
              <h3 className="align-self-center">Datas e pagamento</h3>
              <section className="row">
                <div className="col-6 justify-content-start">
                  <label for="faixaPreco">Estimativa de orçamento</label>
                  <div className="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text">R$</span>
                    </div>
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
                  className="form-control col-4"
                  size="3"
                  id="formaPagamento"
                  value={formaPagamento}
                  defaultValue=""
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
                    <div className="col-5">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="PagamentoNegociar"
                        value={pagamentoNegociar}
                        onChange={pagamentoAnegociar}
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
