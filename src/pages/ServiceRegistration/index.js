import React, { useState } from "react";

import "./styles.css";
import MainComponents from "../../components/MainComponents";
import SkeletonPage from "../../components/SkeletonPage";

/*import MenuLateral from '../../components/MenuLateral'*/

function CadastroJob() {
  const [faixaPrecoMin, setFaixaPrecoMin] = useState(0.0);
  const [faixaPrecoMax, setFaixaPrecoMax] = useState(0.0);
  const [tituloJob, setTituloJob] = useState("");
  const [tipoJob, setTipoJob] = useState("");
  const [nivelExpJob, setNivelExpJob] = useState("");
  const [descricaoJob, setDescricaoJob] = useState("");
  const [dataPagamento, setDataPagamento] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  const [pagamentoNegociar, setPagamentoNegociar] = useState(false);
  const [notaFiscal, setNotaFiscal] = useState(false);
  const [prazoNegociar, setPrazoNegociar] = useState(false);
  const [contatoEmail, setContatoEmail] = useState(false);
  const [contatoTelefone, setContatoTelefone] = useState(false);
  const [contatoLinkdin, setContatoLinkdin] = useState(false);
  const [contatoChat, setContatoChat] = useState(false);
  const [arquivoUpload, setArquivoUpload] = useState(false);
  const arquivo = new FormData();
  const faixaPreco = {
    faixaPrecoMin,
    faixaPrecoMax,
  };
  const contato = {
    contatoChat,
    contatoLinkdin,
    contatoTelefone,
    contatoEmail,
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
    let data = new Date();
    let dia = data.getDate();
    let mes = data.getMonth();
    let ano = data.getFullYear();
    let resp = compareDates(dataPagamento);

    if (prazoNegociar || compareDates(dataPagamento) === true) {
      if (faixaPrecoMax >= faixaPrecoMin) {
        const cadastroJob = {
          tituloJob,
          tipoJob,
          descricaoJob,
          nivelExpJob,
          faixaPreco,
          dataPagamento,
          prazoNegociar,
          formaPagamento,
          pagamentoNegociar,
          notaFiscal,
          contato,
          arquivoUpload,
        };

        console.log(arquivoUpload);
        console.log(cadastroJob);
      } else {
        alert("valor maximo menor que valor minimo");
      }
    } else {
      alert("data invalida ");
    }
  }

  function func01(event) {
    let value = event.target.value;
    console.log(value);
  }

  return (
    <>
      <SkeletonPage sidebar={true} footer={true}>
        <div className="row d-flex ">
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
                      <option value="1">Edição de Imagem</option>
                      <option value="2">Escrita</option>
                      <option value="3">Ilustração</option>
                      <option value="4">Foto</option>
                      <option value="5">Edição de video</option>
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
              <h3 className="align-self-center">Requisitos</h3>
              <section className="row justify-content-start">
                <div className="col-6 d-flex flex-column ">
                  <label for="nivelExpJob">Nível de experiência</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nivelExpJob"
                    value={nivelExpJob}
                    onChange={(e) => setNivelExpJob(e.target.value)}
                    required
                  />
                  <br />
                  <label for="habilidadeJob">Habilidade específica</label>
                  <select
                    class="custom-select"
                    id="habilidadeJob"
                    size="3"
                    required
                  >
                    <option value="1">Técnico deilustração</option>
                    <option value="2">Tipo de áudio</option>
                    <option value="3">Tipo de documento</option>
                    <option value="4">Software</option>
                  </select>
                  <br />
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
                      value={faixaPrecoMin}
                      onChange={(e) =>
                        setFaixaPrecoMin(parseFloat(e.target.value))
                      }
                      required
                    />
                    <input
                      type="number"
                      className="form-control ml-3"
                      id="faixaPrecoMax"
                      min="1"
                      placeholder="R$ max"
                      value={faixaPrecoMax}
                      onChange={(e) =>
                        setFaixaPrecoMax(parseFloat(e.target.value))
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
                  <option value="1">Boleto</option>
                  <option value="2">Crédito</option>
                  <option value="3">Debito</option>
                  <option value="4">Paypal</option>
                  <option value="5">Picpay</option>
                </select>
                <section className="col ml-3">
                  <div className="row">
                    <div className="col-4">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={true}
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
                    <div className="col">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value={true}
                        id="notaFiscal"
                        value={notaFiscal}
                        onChange={(e) => setNotaFiscal(e.target.value)}
                      />
                      <label className="form-check-label" for="notaFiscal">
                        Obrigatorio nota fiscal para CNPJ
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
                      id="contatoLinkdin"
                      onChange={(e) => setContatoLinkdin(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoLinkdin">
                      Linkedin
                    </label>
                  </section>
                  <section>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value={true}
                      id="contatoChat"
                      onChange={(e) => setContatoChat(e.target.value)}
                    />
                    <label className="form-check-label" for="contatoChat">
                      Bate-pao
                    </label>
                  </section>
                </div>
              </section>
              <br />
              <hr />

              <button
                type="submit"
                className="btn align-self-center btnPublicar"
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
